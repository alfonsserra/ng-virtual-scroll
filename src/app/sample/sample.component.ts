import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:    'app-sample',
  templateUrl: './sample.component.html',
  styleUrls:   ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  @Input() public n = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
