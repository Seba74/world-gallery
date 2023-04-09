import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createImage, Image } from '../core/interfaces/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URI: string = 'http://localhost:3000/api/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.URI);
  }

  getImagesByCountry(countryId: string): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.URI}/country/${countryId}`);
  }

  createImage(title: string, description: string, countryId: string, countryName: string, image: File): Observable<any>{
    const imageToLoad: createImage = {title, description, countryId, countryName, image};
    return this.http.post(this.URI, imageToLoad);
  }
}
