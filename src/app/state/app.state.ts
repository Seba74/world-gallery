import { ActionReducerMap } from "@ngrx/store";
import { CountriesState, CountryState } from "../core/states/country.state";
import { imageState } from "../core/states/image.state";
import { countriesReducer, countryReducer } from "./reducers/country.reducer";
import { imagesReducer, vol1Reducer } from "./reducers/images.reducer";

export interface AppState {
    vol1: imageState;
    images: imageState;
    countries: CountriesState;
    country: CountryState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    vol1: vol1Reducer,
    images: imagesReducer,
    countries: countriesReducer,
    country: countryReducer,
}