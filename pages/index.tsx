import { AvatarUpload } from "../components/AvatarUpload";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <AvatarUpload />
    </div>
  );
}
