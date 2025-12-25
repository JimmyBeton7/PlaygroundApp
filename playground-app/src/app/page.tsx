import styles from "./page.module.css";
import { Button } from "../../design-system";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.intro}>
          <Button
            category="primary"
            caption="Sign in"
          />
        </div>
    </div>
  );
}
