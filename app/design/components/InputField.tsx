import styles from "../styles/InputField.module.css";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export default function InputField({
  id,
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
