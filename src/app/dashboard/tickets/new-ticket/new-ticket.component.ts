import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  onSubmit(title: string, request: string) {
    console.log(title);
    console.log(request);
    this.form?.nativeElement.reset();
  }
}
