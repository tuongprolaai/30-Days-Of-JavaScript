const project1 = document.querySelector(".project-1");
const wrapper = document.querySelector(".wrapper");
const countriesWrapper = document.querySelector(".countries-wrapper");
const wrapperProject3 = document.querySelector(".wrapper-project-3");

// Project 1
for (let i: number = 0; i <= 100; i++) {
  const item = document.createElement("div");
  item.classList.add("list-item");
  Object.assign(item.style, {
    width: "100px",
    height: "100px",
  });
  item.textContent = i.toString();
  if (i % 2 === 0) {
    item.style.backgroundColor = "green";
  } else if (i % 2 !== 0) {
    item.style.backgroundColor = "yellow";
  }
  let count = 0;
  for (let j: number = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    item.style.backgroundColor = "red";
  }
  wrapper?.appendChild(item);
}

// Project-2
import { countries } from "./countries.js";
countries.forEach((country: string) => {
  const div = document.createElement("div");
  div.classList.add("country-item");
  div.textContent = country;
  countriesWrapper?.appendChild(div);
});

// Project-3
function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

const year = document.querySelector("span");
setInterval(() => {
  year && (year.style.color = randomColor());
}, 1000);

const pDateTime = document.querySelector("p");
setInterval(() => {
  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const pad = (num: number) => String(num).padStart(2, "0");
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  if (pDateTime) {
    pDateTime.textContent = `${month} ${date}, ${year} ${hh}:${mm}:${ss}`;
    pDateTime.style.backgroundColor = randomColor();
  }
}, 1000);

import { asabenehChallenges2020 } from "./challenges_info.js";
const challenges = asabenehChallenges2020.challenges;
const challengesWrapper = document.createElement("div");
challengesWrapper.classList.add("challengers-wrapper");
challenges.forEach((challenge) => {
  const item = document.createElement("div");
  item.classList.add("challenge-item");
  const title = document.createElement("a");
  title.classList.add("challenge-item--title");
  title.textContent = challenge.name;
  title.setAttribute("href", challenge.githubUrl);
  const listTopics = document.createElement("ul");
  listTopics.classList.add("lisst-topics");
  const listFirstTopic = document.createElement("div");
  listFirstTopic.classList.add("first-topic-item");
  listFirstTopic.textContent = challenge.topics[0]??"";
  listTopics.textContent = challenge.topics[0] ?? "";
  challenge.topics.forEach((topic) => {
    const topicItem = document.createElement("li");
    topicItem.classList.add("topic-item");
    topicItem.textContent = topic;
    listTopics.appendChild(topicItem);
  });
  listFirstTopic.onclick = () => {
    listTopics.classList.toggle("active");
  };
  const statusItem = document.createElement("div");
  statusItem.classList.add("challenge-item--status");
  statusItem.textContent = challenge.status;
  item.append(title, listTopics,listFirstTopic, statusItem);
  challengesWrapper.append(item);
  if (challenge.status === "Done") {
    item.style.backgroundColor = "green";
  } else if (challenge.status === "Ongoing") {
    item.style.backgroundColor = "yellow";
  } else {
    item.style.backgroundColor = "red";
  }
});
wrapperProject3!.append(challengesWrapper);
