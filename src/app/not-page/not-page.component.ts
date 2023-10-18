import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-page',
  templateUrl: './not-page.component.html',
  styleUrls: ['./not-page.component.css']
})
export class NotPageComponent {

  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  };

}
