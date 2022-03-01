import Styles from "../Styles/LoaderStyle.module.css";

export default function Loader() {
  return (
    <div className={Styles.loaderParent}>
      <div
        className={Styles.loaderChild + " spinner-border text-primary"}
        role="status"
      >
        <span class="sr-only"></span>
      </div>
    </div>
  );
}
