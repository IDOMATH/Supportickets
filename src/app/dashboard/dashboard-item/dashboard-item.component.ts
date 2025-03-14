import { Component, input } from "@angular/core";

interface Img {
  src: string;
  alt: string;
}

@Component({
  selector: "app-dashboard-item",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-item.component.html",
  styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
  image = input.required<Img>();
  title = input.required<string>();
}
