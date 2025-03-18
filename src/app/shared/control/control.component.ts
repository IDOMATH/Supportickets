import {
  Component,
  input,
  ViewEncapsulation,
  inject,
  ElementRef,
  contentChild,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: { class: "control", "(click)": "onClick()" },
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);
  // Here we use content child instead of children because there only ever be one content
  // but it could be either input or text area
  // @ContentChild("input") private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      "input"
    );

  onClick() {
    console.log("clicked");
    console.log(this.el);
    console.log(this.control().nativeElement.value);
  }
}
