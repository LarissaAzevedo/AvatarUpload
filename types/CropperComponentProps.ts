import { Crop } from "./Crop";

export interface CropperComponentProps {
  image: string;
  crop: Crop;
  zoom: number;
  aspect: number;
  onCropChange: Function;
  onCropComplete: Function;
  onZoomChange: Function;
  showGrid: boolean;
  cropShape: string;
}
