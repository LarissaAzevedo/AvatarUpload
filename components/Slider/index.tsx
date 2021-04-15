import Slider from "@material-ui/core/Slider";

import styles from "../../styles/SliderComponent.module.scss";

export const SliderComponent = ({ zoom, onZoomChange }) => {
  return (
    <div className={styles.controls}>
      <span className={styles.label}>Crop</span>
      <Slider
        aria-label="image crop adjustment"
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(_, zoom) => onZoomChange(zoom)}
      />
    </div>
  );
};
