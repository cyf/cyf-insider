import styles from "./loading-dots.module.css";

const LoadingDots = () => {
  return (
    <span className={styles.loading}>
      <span className="bg-black dark:bg-white" />
      <span className="bg-black dark:bg-white" />
      <span className="bg-black dark:bg-white" />
    </span>
  );
};

export default LoadingDots;
