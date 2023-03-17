import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string = '';

  constructor() {}

  ngOnInit() {
    console.log('this.selectedOption', this.selectedOption)
  }

}
