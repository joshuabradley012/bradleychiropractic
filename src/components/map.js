import styles from "@/styles/map.module.scss";

export default function Map() {
  return (
    <div className={styles.map}>
      <div className={styles.mapInner}>
        <iframe
          loading="lazy"
          allowFullScreen={true}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0D0k2ChjLuOipeyDacW0pZsfR708ueC4
            &q=Bradley+Chiropractic+Nutrition+Center,Bakersfield+CA"
        />
      </div>
    </div>
  );
}
