import { Injectable } from "@angular/core";
import { Event, Router, RouterEvent } from "@angular/router";

type CurrentUser = {
    email: string;
    firstName: string;
    lastName: string;
};

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private user: CurrentUser | null = null;

    constructor(private router: Router) {
        const publicRoutes = [
            "/",
            "/impress",
            "/privacy",
        ]

        this.router.events.subscribe(async (event: RouterEvent | Event) => {
            if (!(event instanceof RouterEvent)) {
                return;
            }

            if (event.url === "/" && this.getUser()) {
                await this.router.navigate(["/dashboard"]);
                return;
            }

            if (!publicRoutes.includes(event.url) && this.getUser() == null) {
                await this.router.navigate(["/"]);
            }
        });
    }

    login(credentials: { email: string, password: string }): boolean {
        if (credentials.email === "test@gmail.com" && credentials.password === "1234") {
            this.user = {
                email: "test@gmail.com",
                firstName: "John",
                lastName: "Doe",
            };
            return true;
        } else {
            return false;
        }
    }

    getUser(): Readonly<CurrentUser> | null {
        return this.user;
    }

    logout() {
        this.user = null;
    }
}
