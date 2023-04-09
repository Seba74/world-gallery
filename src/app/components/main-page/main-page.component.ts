import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from 'src/app/core/interfaces/image';
import { loadVol1 } from 'src/app/state/actions/images';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  images$: Observable<Image[]> = new Observable<Image[]>();
  loading$: Observable<boolean> = new Observable<boolean>();
  
  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.vol1.loading);
    this.store.dispatch(loadVol1());
    this.images$ = this.store.select(state => state.vol1.images);
  }
}
