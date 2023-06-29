import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-standalone-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-demo.component.html',
  styleUrls: ['./standalone-demo.component.scss']
})
export class StandaloneDemoComponent implements OnInit {

  apiService = inject(ApiService);

  ngOnInit(): void {
      this.apiService.getPokemon(2).subscribe(res => console.log(res));
  }

}
