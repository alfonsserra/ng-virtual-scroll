import { Component, OnInit } from '@angular/core';


@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Virtual Scroll';
  public numbers: number[] = [];

  constructor() {
  }

  public ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }
}
