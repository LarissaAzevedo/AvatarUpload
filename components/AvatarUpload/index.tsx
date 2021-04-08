import React from "react";
import styles from "../../styles/AvatarUpload.module.scss";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import { useState } from "react";
import { CroppedAreaPixels, Crop } from "../../types";
import { readFile } from "../../utils/readFile";
import { dataURLtoFile } from "../../utils/dataURLtoFile";
import getCroppedImg from "../../utils/cropImage";

export const AvatarUpload: React.FC = () => {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedArea, setCroppedArea] = useState<CroppedAreaPixels>(null);
  const [imageSrc, setImageSrc] = useState<string>();
  const [finalImage, setFinalImage] = useState<string>();
  const [result, setResult] = useState<any>();
  const aspect: number = 1;

  const onCropChange = (crop: Crop) => {
    setCrop(crop);
  };

  const onCropComplete = (croppedAreaPixels: CroppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  const handleCancel = () => {
    setImageSrc(undefined);
    setFinalImage(undefined);
    setZoom(1);
  };

  const handleSave = async () => {
    const canvas = await getCroppedImg(imageSrc, croppedArea);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      "cropped-image.jpeg"
    );
    setFinalImage(imageSrc);
    setResult(convertedUrlToFile);
  };

  return (
    <div className={styles.component}>
      {!imageSrc ? (
        <div className={styles.fileInput}>
          <input
            type="file"
            aria-label="Add a photo, you can also drag it"
            name="foto"
            onChange={onFileChange}
            ref={imageSrc}
          />
        </div>
      ) : (
        <div className={styles.App}>
          <div className={styles.cropContainer}>
            {!result ? (
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                cropShape="round"
                showGrid={true}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                onZoomChange={onZoomChange}
              />
            ) : (
              <img
                src={result}
                alt="Image done"
                className={styles.finalImage}
              />
            )}
          </div>
          <div className={styles.actions}>
            {!finalImage && (
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
            )}

            {finalImage ? (
              <button
                aria-label="button to restar the process"
                className={styles.restart}
                onClick={() => handleCancel()}
              >
                Restart
              </button>
            ) : (
              <button
                aria-label="button to cancel the edit"
                className={styles.save}
                onClick={() => handleSave()}
              >
                Save
              </button>
            )}
          </div>

          <button
            aria-label="button to cancel image crop"
            className={styles.close}
            onClick={() => handleCancel()}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
