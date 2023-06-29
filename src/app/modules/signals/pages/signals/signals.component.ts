import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentComponent } from '../../components/parent/parent.component';
import { ChildComponent } from '../../components/child/child.component';
import { Child2Component } from '../../components/child2/child2.component';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  standalone: true,
  imports: [ParentComponent, ChildComponent, Child2Component],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

}
