import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
  standalone: true
})
export class RouteComponent implements OnInit {

  // With component input binding:
  @Input('id') id!: string;
  @Input('done') done!: boolean;

  // Without component input binding:
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params["id"];
    // });
    // this.route.data.subscribe(routeData => {
    //   this.done = routeData["done"]
    // })

  }

}
