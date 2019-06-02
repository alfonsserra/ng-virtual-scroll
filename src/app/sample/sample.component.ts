import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector:    'app-sample',
  templateUrl: './sample.component.html',
  styleUrls:   ['./sample.component.scss']
})
export class SampleComponent implements OnInit, OnDestroy {

  @Input() public n = 1;

  constructor() {
  }

  ngOnInit() {
    console.log('On init ' + this.n);
  }

  ngOnDestroy() {
    console.log('On destroy ' + this.n);
  }
}
