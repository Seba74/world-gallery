import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/interfaces/places';
import { loadCountries } from 'src/app/state/actions/country';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries$: Observable<Country[]> = new Observable<Country[]>();
  loading$: Observable<boolean> = new Observable<boolean>();
  loading: boolean = false;

  constructor(private store: Store<AppState>) {
    this.countries$ = this.store.select((state) => state.countries.countries);
  }

  ngOnInit() {
    this.loading = true;
    this.loading$ = this.store.select((state) => state.countries.loading);
    this.store.dispatch(loadCountries());
    this.countries$ = this.store.select((state) => state.countries.countries);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
