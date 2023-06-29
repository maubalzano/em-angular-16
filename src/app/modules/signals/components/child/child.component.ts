import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChangeDetectionDirective } from '../../directives/detect-changes.directive';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  imports: [JsonPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent extends ChangeDetectionDirective{

  @Input() user!: any

}
