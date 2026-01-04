import { countries } from "./countries";
import { useState, useMemo } from "react";
import clsx from "clsx";

import styles from "./WorldCountries.module.scss";

type SortType = "name" | "capital" | "population";
type SortOrder = "asc" | "desc";
type ChartType = "population" | "languages";

function Bar({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const width = (value / max) * 100;
  return (
    <div className={styles.row}>
      <span>{label}</span>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${width}%` }}></div>
      </div>
      <span>{value.toLocaleString()}</span>
    </div>
  );
}

function WorldCountries() {
  const [chartType, setChartType] = useState<ChartType>("population");
  const [sortType, setSortType] = useState<SortType>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // ------------------- Filter countries -------------------
  const filteredCountries = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.capital.toLowerCase().includes(term) ||
        c.languages.some((l) => l.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  // ------------------- Sort countries -------------------
  const sortedCountries = useMemo(() => {
    return [...filteredCountries].sort((a, b) => {
      let result =
        sortType === "population"
          ? a.population - b.population
          : a[sortType].localeCompare(b[sortType]);
      return sortOrder === "asc" ? result : -result;
    });
  }, [filteredCountries, sortType, sortOrder]);

  const handleSort = (type: SortType) => {
    if (sortType === type)
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    else {
      setSortType(type);
      setSortOrder("asc");
    }
  };

  // ------------------- Chart data -------------------
  const totalWorldPopulation = useMemo(
    () => countries.reduce((sum, c) => sum + c.population, 0),
    []
  );
  const totalWorldLanguages = useMemo(
    () => countries.reduce((sum, c) => sum + c.languages.length, 0),
    []
  );

  const populationChartData = useMemo(() => {
    const top = [...filteredCountries]
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);
    return [
      { name: "World", value: totalWorldPopulation },
      ...top.map((c) => ({ name: c.name, value: c.population })),
    ];
  }, [filteredCountries, totalWorldPopulation]);

  const languageChartData = useMemo(() => {
    const langCount: Record<string, number> = {};
    filteredCountries.forEach((c) =>
      c.languages.forEach((l) => (langCount[l] = (langCount[l] || 0) + 1))
    );
    const top = Object.entries(langCount)
      .map(([name, count]) => ({ name, value: count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
    return [{ name: "World", value: totalWorldLanguages }, ...top];
  }, [filteredCountries, totalWorldLanguages]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>World Countries Data</h1>
          <p>Currently, we have 250 countries</p>
        </div>
      </header>

      <main className="container">
        <div className={styles["search-box"]}>
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles["btn-group"]}>
          {(["name", "capital", "population"] as SortType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleSort(type)}
              className={styles.btn}
            >
              {type.toUpperCase()}
              {sortType === type && (
                <i
                  className={`fa-solid ${
                    sortOrder === "asc" ? "fa-arrow-down" : "fa-arrow-up"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <section className={styles.grid}>
          {sortedCountries.map((c) => (
            <div key={c.name} className={styles.card}>
              <div className={styles.img}></div>
              <h3>{c.name}</h3>
              <p>Capital: {c.capital}</p>
              <p>Language: {c.languages.join(", ")}</p>
              <p>Population: {c.population}</p>
            </div>
          ))}
        </section>

        <section className={styles.chartSection}>
          <div className={styles["btn-group"]}>
            {(["population", "languages"] as ChartType[]).map((type) => (
              <button
                key={type}
                className={clsx(
                  chartType === type && styles.active,
                  styles.btn
                )}
                onClick={() => setChartType(type)}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>

          <h3>
            {chartType === "population"
              ? "Population of displayed countries"
              : "Languages of displayed countries"}
          </h3>

          <div>
            {(chartType === "population"
              ? populationChartData
              : languageChartData
            ).map((item) => (
              <Bar
                key={item.name}
                label={item.name}
                value={item.value}
                max={
                  chartType === "population"
                    ? totalWorldPopulation
                    : totalWorldLanguages
                }
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}

export default WorldCountries;
