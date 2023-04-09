import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { loadCountries, loadCountriesSuccess, loadCountriesFailure, loadCountry, loadCountrySuccess, loadCountryFailure } from '../actions/country';

@Injectable()
export class CountryEffect {

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      mergeMap(() =>
        this.countryService.getCountries().pipe(
          map((res) => loadCountriesSuccess({ countries: res })),
          catchError((err) => of(loadCountriesFailure({ error: err }))))
    ))
  );

  loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountry),
      mergeMap((action: any) =>
        this.countryService.getCountry(action.parameters).pipe(
          map((res) => loadCountrySuccess({ country: res })),
          catchError((err) => of(loadCountryFailure({ error: err }))))
    ))
  );

  constructor(private actions$: Actions, private countryService: CountryService) {}
}
