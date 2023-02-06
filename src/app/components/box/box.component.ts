import { Component, Input, OnInit } from '@angular/core';
import { IBox } from 'src/app/model/box.model';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() box: IBox;
  @Input() selected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
