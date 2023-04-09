import { createSelector } from "@ngrx/store";
import { CountriesState, CountryState } from "src/app/core/states/country.state";
import { AppState } from "../app.state";

export const selectAllCountries = (state: AppState) => state.countries;
export const selectACountry = (state: AppState) => state.country;

export const selectCountries = createSelector(
    selectAllCountries,
    (state: CountriesState) => state.countries
);

export const selectCountry = createSelector(
    selectACountry,
    (state: CountryState) => state.country
);

export const selectCountriesLoading = createSelector(
    selectAllCountries,
    (state: CountriesState) => state.loading
);

export const selectCountryLoading = createSelector(
    selectACountry,
    (state: CountryState) => state.loading
);