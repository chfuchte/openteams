import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  imports: [RouterLink],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  title = input<string>();
  description = input<string>();
  url = input<string>();

  constructor() { }
}
