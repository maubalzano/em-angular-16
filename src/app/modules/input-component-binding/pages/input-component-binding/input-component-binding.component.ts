import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-input-component-binding',
  templateUrl: './input-component-binding.component.html',
  styleUrls: ['./input-component-binding.component.scss'],
  standalone: true,
  imports: [RouterLink, NgFor]
})
export class InputComponentBindingComponent {
  public todos: any[] = [
    {
      id: '1',
      title: 'Fare la spesa',
      description: '1 Limone, 2 Arance, 4 Avocado ...',
      done: false
    },
    {
      id: '2',
      title: 'Iscriversi in palestra',
      description: 'Gym Sporting Club, via Roma 222',
      done: false
    },
    {
      id: '3',
      title: 'Comprare regalo Mario',
      description: '1 Arancia',
      done: true
    }
  ]
}
