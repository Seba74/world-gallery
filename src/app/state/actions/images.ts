import { createAction, props } from "@ngrx/store";
import { Image } from "src/app/core/interfaces/image";

export const loadVol1 = createAction(
    "[Vol1] Load Vol1",
);

export const loadVol1Success = createAction(
    "[Vol1] Load Vol1 Success",
    props<{ vol1: Image[]}>()
);

export const loadVol1Failure = createAction(
    "[Vol1] Load Vol1 Failure",
    props<{ error: Error}>()
);

export const loadImagesByCountry = createAction(
    "[Images] Load Images By Country",
    props<{ countryId: string}>()
);

export const loadImagesByCountrySuccess = createAction(
    "[Images] Load Images By Country Success",
    props<{ images: Image[]}>()
);

export const loadImagesByCountryFailure = createAction(
    "[Images] Load Images By Country Failure",
    props<{ error: Error}>()
);