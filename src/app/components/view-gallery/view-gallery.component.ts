import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Observable } from 'rxjs';
import { Image } from 'src/app/core/interfaces/image';
import { Country } from 'src/app/core/interfaces/places';
import { loadCountry } from 'src/app/state/actions/country';
import { loadImagesByCountry } from 'src/app/state/actions/images';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.scss'],
})
export class ViewGalleryComponent implements OnInit {
  id: string = ''
  isEnd: boolean = false;
  loading$: Observable<boolean> = new Observable<boolean>();
  loading: boolean = false;
  country$: Observable<Country | undefined> = new Observable<
    Country | undefined
  >();
  country: Country | undefined;
  countries$: Observable<Country[]> = new Observable<Country[]>();
  countries: Country[] = [];
  images$: Observable<Image[]> = new Observable<Image[]>();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.country$ = this.store.select((state) => state.country.country);
    this.countries$ = this.store.select((state) => state.countries.countries);
    this.loading$ = this.store.select((state) => state.images.loading);
    this.images$ = this.store.select((state) => state.images.images);
  }

  ngOnInit() {
    this.loading = true;
    this.countries$.subscribe((countries) => {
      this.countries = countries;
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id')!;
        this.store.dispatch(loadCountry({ parameters: this.id }));
        this.country$.subscribe((country) => {
          this.country = country;
          this.store.dispatch(loadImagesByCountry({ countryId: this.country?.shortName!}));
          setTimeout(() => {
            this.loading = false;
          }, 3000);
        });
      });
      if (!this.countries.find((country) => country.shortName === this.id)) {
        this.loading = false;
        this.router.navigate(['/gallery']);
      }
    });
  }

  @ViewChild('main', { read: DragScrollComponent }) ds!: DragScrollComponent;
  moveTo(index: number) {
    this.ds.moveTo(index);
  }

  reachesRightBound(){
    this.isEnd = !this.isEnd;    
  }

}
