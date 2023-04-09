import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ImageService } from 'src/app/service/image.service';
import { loadVol1, loadVol1Success, loadVol1Failure, loadImagesByCountrySuccess, loadImagesByCountryFailure, loadImagesByCountry } from '../actions/images';
import { loadCountries } from '../actions/country';

@Injectable()
export class imageEffect {

  loadVol1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVol1),
      mergeMap(() =>
        this.imageService.getImages().pipe(
          map((res) => loadVol1Success({ vol1: res })),
          catchError((err) => of(loadVol1Failure({ error: err }))))
    ))
  );

  loadImageByCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadImagesByCountry),
      mergeMap((action: any) =>
        this.imageService.getImagesByCountry(action.countryId).pipe(
          map((res) => loadImagesByCountrySuccess({ images: res })),
          catchError((err) => of(loadImagesByCountryFailure({ error: err }))))
    ))
  );


  constructor(private actions$: Actions, private imageService: ImageService) {}
}
