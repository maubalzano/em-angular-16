import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { ChangeDetectionDirective } from '../../directives/detect-changes.directive';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  standalone: true,
  imports: [JsonPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component extends ChangeDetectionDirective{

  @Input() userSignal!: Signal<any>;

}
