import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signals'
  },
  {
    path: 'standalone-components',
    loadComponent: () => import('./shared/components/standalone-demo/standalone-demo.component').then(m => m.StandaloneDemoComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./modules/signals/pages/signals/signals.component').then(m => m.SignalsComponent)
  },
  {
    path: 'input-component-binding', 
    loadChildren: () => import('./modules/input-component-binding/input-component-binding.routes').then(m => m.INPUT_COMPONENT_BINDING_ROUTES),
    providers: [
      // provideStore(inputComponentBindingStore),
      // provideEffects([inputComponentBindingEffect])
      // ...
    ]
  },

];
