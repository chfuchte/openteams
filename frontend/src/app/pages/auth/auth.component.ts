import { Component, OnInit } from "@angular/core";
import { AuthFormComponent } from "../../auth-form/auth-form.component";

@Component({
    selector: "app-auth",
    imports: [AuthFormComponent],
    templateUrl: "./auth.component.html",
    styleUrl: "./auth.component.scss",
})
export class AuthPageComponent {

}
