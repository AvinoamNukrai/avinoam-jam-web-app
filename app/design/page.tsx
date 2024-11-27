import styles from "./styles/page.module.css";
import InputField from "./components/InputField";
import { Button } from "./components/Button";

export default function Page() {
  return (
    <main className={styles.container}>
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
        <InputField id="email" type="email" placeholder="מייל" />
        <InputField id="password" type="password" placeholder="סיסמה" />
        <Button>כניסה</Button>
      </form>
    </main>
  );
}
