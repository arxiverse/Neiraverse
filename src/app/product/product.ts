import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  isLocalhost: boolean = false;
  constructor(private productService: ProductService) {
    this.isLocalhost = this.productService.isLocalhost();
  }
  
  getStarted() {
    if(this.isLocalhost) {
      window.location.href = 'http://localhost:5173';
    } else {
      window.location.href = 'https://qqm.neiraverse.com';
    }
  }
}
