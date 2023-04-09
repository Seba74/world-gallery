import { createSelector } from "@ngrx/store";
import { imageState } from "src/app/core/states/image.state";
import { AppState } from "../app.state";

export const selectVol1 = (state: AppState) => state.vol1;
export const selectImages = (state: AppState) => state.images;

export const selectVol1Images = createSelector(
    selectVol1,
    (state: imageState) => state.images
);

export const selectVol1Loading = createSelector(
    selectVol1,
    (state: imageState) => state.loading
);

export const selectVol1Error = createSelector(
    selectVol1,
    (state: imageState) => state.error
);

export const selectImagesByCountry = createSelector(
    selectImages,
    (state: imageState) => state.images
);

export const selectImagesByCountryLoading = createSelector(
    selectImages,
    (state: imageState) => state.loading
);

export const selectImagesByCountryError = createSelector(
    selectImages,
    (state: imageState) => state.error
);