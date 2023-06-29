import { Component, OnInit, Signal, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionDirective } from '../../directives/detect-changes.directive';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';
import { JsonPipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, ChildComponent, Child2Component, JsonPipe]
})
export class ParentComponent extends ChangeDetectionDirective{

  public formGroup = new FormGroup({
    userName: new FormControl('')
  })

  public sig = signal(0);
  public sigValue = this.sig();

  public user = {
    name: 'Maurizio'
  }

  public userSignal = signal<User>(this.user);

  public changeName() {
    const name = this.formGroup.get('userName')!.value;
    if (name) {
      this.user.name = name
      this.userSignal.update(user => ({...user, name}));
    }
  }

}

export interface User {
  name: string,
  phone?: string,
  surname?: string
}
