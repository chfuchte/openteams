import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-header",
    imports: [RouterLink],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    async doLogout() {
        this.authService.logout();
        await this.router.navigate(["/"]);
    }
}
