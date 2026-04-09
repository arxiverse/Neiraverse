import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export type FeaturedProductResponse = {
  title: string;
  description: string;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = 'http://localhost:8800/api';

  getFeaturedProduct(): Observable<FeaturedProductResponse> {
    return this.http.get<FeaturedProductResponse>(
      `${this.apiBaseUrl}/landing-page/product/featured`,
    );
  }
}
