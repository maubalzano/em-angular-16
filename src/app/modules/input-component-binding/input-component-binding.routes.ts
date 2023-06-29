import {Routes} from '@angular/router';
import { RouteComponent } from './components/route/route.component';
import { InputComponentBindingComponent } from './pages/input-component-binding/input-component-binding.component';

export const INPUT_COMPONENT_BINDING_ROUTES: Routes = [
  { 
    path: '', component: InputComponentBindingComponent
  },
  {
    path: 'todos/open/:id',
    data: {
      done: true
    },
    component: RouteComponent
  },
  {
    path: 'todos/done/:id',
    data: {
      done: false
    },
    component: RouteComponent
  },
];