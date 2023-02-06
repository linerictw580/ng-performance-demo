import { Component, OnInit } from '@angular/core';
import { IBox } from './model/box.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentId = null;
  boxes: IBox[] = [];
  offsetX: number;
  offsetY: number;

  ngOnInit() {
    this.boxes = [...Array(10000)].map((v, i) => {
      return {
        id: i,
        x: Math.random() * window.screen.width,
        y: Math.random() * window.screen.height,
      };
    });
  }

  onMouseDown(event: MouseEvent) {
    const { target, clientX, clientY } = event;
    const id = Number(target['getAttribute']('dataId'));
    const box = this.boxes[id];
    this.offsetX = box.x - clientX;
    this.offsetY = box.y - clientY;
    this.currentId = id;
  }

  onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.currentId !== null) {
      const { clientX, clientY } = event;
      this._updateBox(this.currentId, clientX + this.offsetX, clientY + this.offsetY);
    }
  }

  onMouseUp(event: MouseEvent) {
    this.currentId = null;
  }

  private _updateBox(id: number, x: number, y: number) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
