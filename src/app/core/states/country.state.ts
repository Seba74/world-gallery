import { Country } from "../interfaces/places";

export interface CountriesState {
    countries: Country[];
    loading: boolean;
    error: Error | undefined;
}

export interface CountryState {
    country: Country | undefined;
    loading: boolean;
    error: Error | undefined;
}