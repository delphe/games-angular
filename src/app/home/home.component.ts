import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('hexgl-score'));
    // Display all local storage if hexgl-score can be found.
    this.allStorage();
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        console.log(i);
        values.push( localStorage.getItem(keys[i]) );
    }
    console.log(values);
    return values;
  }

}
