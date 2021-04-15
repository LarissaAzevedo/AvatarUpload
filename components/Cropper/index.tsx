import React, { FunctionComponent } from "react";
import Cropper from "react-easy-crop";

export const CropperComponent = ({
  image,
  crop,
  zoom,
  aspect,
  showGrid,
  cropShape,
  onCropChange,
  onCropComplete,
  onZoomChange,
}) => {
  return (
    <Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={aspect}
      cropShape={cropShape}
      showGrid={showGrid}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      onZoomChange={onZoomChange}
    />
  );
};
