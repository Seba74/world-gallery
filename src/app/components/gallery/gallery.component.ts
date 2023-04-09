import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/interfaces/places';
import { loadCountries } from 'src/app/state/actions/country';
import { AppState } from 'src/app/state/app.state';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  lastSelection: Country | undefined;
  countries$: Observable<Country[]> = new Observable<Country[]>();
  countries: Country[] = [];
  loading$: Observable<boolean> = new Observable<boolean>();
  loading: boolean = false;

  constructor(private store: Store<AppState>) {}


  ngOnInit(): void {
    this.loading = true;
    this.loading$ = this.store.select((state) => state.countries.loading);
    this.store.dispatch(loadCountries());
    this.countries$ = this.store.select((state) => state.countries.countries);
    this.countries$.subscribe((countries) => {
      this.countries = countries;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });
  }

  @ViewChild('main', { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveTo(index: number) {
    this.ds.moveTo(index);
  }
}
