"use client";
import styles from "./styles/page.module.css";

export default function Page() {
  const handleForgotPassword = () => {
    alert("שכחת סיסמה? ניתן לשחזר דרך המערכת!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="/images/web-page-logo.jpg"
          alt="Design logo"
          className={styles.logoImage}
        />
        <p className={styles.subtitle}>
          יחד ניצור עבורך מסלול מותאם אישית בביקורך הקרוב במוזיאון
        </p>
      </div>

      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}></label>
          <input
            id="email"
            type="email"
            className={styles.inputField}
            placeholder="מייל"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}></label>
          <input
            id="password"
            type="password"
            className={styles.inputField}
            placeholder="סיסמה"
            required
          />
        </div>
        <button
          type="button"
          className={styles.forgotButton}
          onClick={handleForgotPassword}
        >
          שכחתי סיסמא
        </button>
        <button type="submit" className={styles.submitButton}>
          כניסה
        </button>
      </form>
    </div>
  );
}
