import { createReducer, on } from "@ngrx/store";
import { CountriesState, CountryState } from "src/app/core/states/country.state";
import { loadCountries, loadCountriesSuccess, loadCountriesFailure, loadCountry, loadCountrySuccess, loadCountryFailure } from "../actions/country";


export const initialState: CountriesState = {
    countries: [],
    loading: false,
    error: undefined
};

export const initialCountryState: CountryState = {
    country: undefined,
    loading: false,
    error: undefined
};

export const countriesReducer = createReducer(
    initialState,
    on(loadCountries, (state) => ({...state, loading: true})),
    on(loadCountriesSuccess, (state, {countries}) => ({...state, countries, loading: false})),
    on(loadCountriesFailure, (state, {error}) => ({...state, error, loading: false}))
);

export const countryReducer = createReducer(
    initialCountryState,
    on(loadCountry, (state) => ({...state, loading: true})),
    on(loadCountrySuccess, (state, {country}) => ({...state, country, loading: false})),
    on(loadCountryFailure, (state, {error}) => ({...state, error, loading: false}))
);


