import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Country } from '../core/interfaces/places';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  getCountries(): Observable<any> {

    const countries: Country[] = [
      {
        name: 'Argentina',
        shortName: 'arg',
        url: 'url(../../../assets/previews/arg.webp)',
        isSelected: false,
      },
      {
        name: 'Belgium',
        shortName: 'bel',
        url: 'url(../../../assets/previews/bel.webp)',
        isSelected: false,
      },
      {
        name: 'Spain',
        shortName: 'spa',
        url: 'url(../../../assets/previews/spa.webp)',
        isSelected: false,
      },
      {
        name: 'Italy',
        shortName: 'ita',
        url: 'url(../../../assets/previews/ita.webp)',
        isSelected: false,
      },
      {
        name: 'France',
        shortName: 'fra',
        url: 'url(../../../assets/previews/fra.webp)',
        isSelected: false,
      },
      {
        name: 'Greece',
        shortName: 'gre',
        url: 'url(../../../assets/previews/gre.webp)',
        isSelected: false,
      },
      {
        name: 'Netherlands',
        shortName: 'net',
        url: 'url(../../../assets/previews/net.webp)',
        isSelected: false,
      },
      {
        name: 'Luxemburg',
        shortName: 'lux',
        url: 'url(../../../assets/previews/lux.webp)',
        isSelected: false,
      },
      {
        name: 'United Kingdom',
        shortName: 'uk',
        url: 'url(../../../assets/previews/uk.webp)',
        isSelected: false,
      },
    ];
    
    return of(countries).pipe(
      delay(500)
    )
  }

  getCountry(countryShortName: string): Observable<any> {
    const countries: Country[] = [
      {
        name: 'Argentina',
        shortName: 'arg',
        url: 'url(../../../assets/previews/arg.webp)',
        image: 'url(../../../assets/places-cover/arg.webp)',
        isSelected: false,
      },
      {
        name: 'Belgium',
        shortName: 'bel',
        url: 'url(../../../assets/previews/bel.webp)',
        image: 'url(../../../assets/places-cover/bel.webp)',
        isSelected: false,
      },
      {
        name: 'Spain',
        shortName: 'spa',
        url: 'url(../../../assets/previews/spa.webp)',
        image: 'url(../../../assets/places-cover/spa.webp)',
        isSelected: false,
      },
      {
        name: 'Italy',
        shortName: 'ita',
        url: 'url(../../../assets/previews/ita.webp)',
        image: 'url(../../../assets/places-cover/ita.webp)',
        isSelected: false,
      },
      {
        name: 'France',
        shortName: 'fra',
        url: 'url(../../../assets/previews/fra.webp)',
        image: 'url(../../../assets/places-cover/fra.webp)',
        isSelected: false,
      },
      {
        name: 'Greece',
        shortName: 'gre',
        url: 'url(../../../assets/previews/gre.webp)',
        image: 'url(../../../assets/places-cover/gre.webp)',
        isSelected: false,
      },
      {
        name: 'Netherlands',
        shortName: 'net',
        url: 'url(../../../assets/previews/net.webp)',
        image: 'url(../../../assets/places-cover/net.webp)',
        isSelected: false,
      },
      {
        name: 'Luxemburg',
        shortName: 'lux',
        url: 'url(../../../assets/previews/lux.webp)',
        image: 'url(../../../assets/places-cover/lux.webp)',
        isSelected: false,
      },
      {
        name: 'United Kingdom',
        shortName: 'uk',
        url: 'url(../../../assets/previews/uk.webp)',
        image: 'url(../../../assets/places-cover/uk.webp)',
        isSelected: false,
      },
    ];

    const country = countries.find(c => c.shortName === countryShortName);

    return of(country).pipe(
      delay(500)
    )
  }
}
