import { createAction, props } from "@ngrx/store";
import { Country } from "src/app/core/interfaces/places";

export const loadCountries = createAction(
    "[Country] Load Countries",
);

export const loadCountry = createAction(
    "[Country] Load Country",
    props<{ parameters: string}>()
);

export const loadCountriesSuccess = createAction(
    "[Country] Load Countries Success",
    props<{ countries: Country[]}>()
);

export const loadCountrySuccess = createAction(
    "[Country] Load Country Success",
    props<{ country: Country}>()
);

export const loadCountriesFailure = createAction(
    "[Country] Load Country Failure",
    props<{ error: Error}>()
);

export const loadCountryFailure = createAction(
    "[Country] Load Country Failure",
    props<{ error: Error}>()
);
