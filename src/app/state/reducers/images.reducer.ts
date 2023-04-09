import { createReducer, on } from "@ngrx/store";
import { imageState } from "src/app/core/states/image.state";
import { loadImagesByCountry, loadImagesByCountryFailure, loadImagesByCountrySuccess, loadVol1, loadVol1Failure, loadVol1Success } from "../actions/images";


export const initialState: imageState = {
    images: [],
    loading: false,
    error: undefined
};

export const vol1Reducer = createReducer(
    initialState,
    on(loadVol1, (state) => ({...state, loading: true})),
    on(loadVol1Success, (state, {vol1}) => ({...state, images: vol1, loading: false})),
    on(loadVol1Failure, (state, {error}) => ({...state, error, loading: false}))
);

export const imagesReducer = createReducer(
    initialState,
    on(loadImagesByCountry, (state) => ({...state, loading: true})),
    on(loadImagesByCountrySuccess, (state, {images}) => ({...state, images, loading: false})),
    on(loadImagesByCountryFailure, (state, {error}) => ({...state, error, loading: false}))
);


