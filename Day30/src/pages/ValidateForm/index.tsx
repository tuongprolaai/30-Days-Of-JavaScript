import { useState } from "react";
import styles from "./ValidateForm.module.scss";

export default function ValidateForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    bio: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    bio: "",
  });

  const regex = {
    firstName: /^[a-zA-Z0-9]{3,16}$/,
    lastName: /^[a-zA-Z0-9]{3,16}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^[a-zA-Z0-9@_-]{6,20}$/,
    telephone: /^(\d{11}|\d{3}-\d{3}-\d{4})$/,
    bio: /^[a-z_-]{8,50}$/,
  };

  const errorMessages = {
    firstName: "First name must be 3-16 alphanumeric",
    lastName: "Last name must be 3-16 alphanumeric",
    email: "Invalid email address",
    password: "Password 6-20 chars, @ _ - allowed",
    telephone: "Telephone must be 11 digits or 333-333-3334",
    bio: "Bio 8-50 chars, lowercase, _ or -",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: regex[name as keyof typeof regex].test(value)
        ? ""
        : errorMessages[name as keyof typeof errorMessages],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {} as typeof errors;
    (Object.keys(form) as (keyof typeof form)[]).forEach((key) => {
      newErrors[key] = regex[key].test(form[key]) ? "" : errorMessages[key];
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => !err)) {
      alert("Form submitted!");
      console.log(form);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {(Object.keys(form) as (keyof typeof form)[]).map((key) => (
        <div key={key} className={styles.formGroup}>
          <label htmlFor={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          {key === "bio" ? (
            <textarea
              id={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              className={errors[key] ? styles.inputError : ""}
            />
          ) : (
            <input
              id={key}
              name={key}
              type={key === "password" ? "password" : "text"}
              value={form[key]}
              onChange={handleChange}
              className={errors[key] ? styles.inputError : ""}
            />
          )}
          {errors[key] && <p className={styles.errorMessage}>{errors[key]}</p>}
        </div>
      ))}

      <button type="submit" className={styles.btnSubmit}>
        Submit
      </button>
    </form>
  );
}
