import { Component, signal } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { Introduction } from './introduction/introduction';
import { Product } from './product/product';
import { Services } from './services/services';
import { Testimonial } from './testimonial/testimonial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Introduction, Product, Services, Gallery, Testimonial, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Neiraverse');
}
