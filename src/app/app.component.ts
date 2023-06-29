import { Component, inject } from '@angular/core';
import { CanActivateFn, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptorFn } from '@angular/common/http';
import { SignalsComponent } from './modules/signals/pages/signals/signals.component';
import { InputComponentBindingComponent } from './modules/input-component-binding/pages/input-component-binding/input-component-binding.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterOutlet, RouterLink, SignalsComponent, InputComponentBindingComponent]
})
export class AppComponent {
  
}