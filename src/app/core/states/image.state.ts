import { Image } from "../interfaces/image";

export interface imageState {
    images: Image[];
    loading: boolean;
    error: Error | undefined;
}