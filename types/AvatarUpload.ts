export type AvatarUpload = {
  imageSrc: string;
  finalImage: string;
  zoom: number;
  crop: { x: number; y: number };
  aspect: number;
  showGrid: boolean;
  cropShape: "rect" | "round";
  onCropChange: () => void;
  onZoomChange: () => void;
  onCropComplete: Function;
  value: number;
  min: number;
  max: number;
  step: number;
};
