import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBox } from 'src/app/model/box.model';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent /*implements DoCheck*/ {
  @Input() box: IBox;
  @Input() selected: boolean;

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  rerender() {
    // setTimeout(() => {
    console.log('rerender');
    // }, 0);
  }
}
