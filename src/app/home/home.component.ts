import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  ngAfterViewInit() {
    const options = {
      strings: ["Software Developer.", "Backend Developer."],
      typeSpeed: 150,
      backSpeed: 30,
      loop: true
    };
    if (this.typedElement) {
      new Typed(this.typedElement.nativeElement, options);
    }
  }
}
