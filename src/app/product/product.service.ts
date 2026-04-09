import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedProductResponse, GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly globalService = inject(GlobalService);

  getFeaturedProduct(): Observable<FeaturedProductResponse> {
    return this.globalService.getFeaturedProduct();
  }

  isLocalhost() {
    return window.location.hostname === 'localhost';
  }
}
