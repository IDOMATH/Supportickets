import {
  Component,
  ElementRef,
  viewChild,
  AfterViewInit,
  output,
} from "@angular/core";
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
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  add = output<{ title: string; text: string }>();

  ngAfterViewInit() {
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, request: string) {
    this.add.emit({ title: title, text: request });
    console.log(title);
    console.log(request);
    this.form().nativeElement.reset();
  }
}
