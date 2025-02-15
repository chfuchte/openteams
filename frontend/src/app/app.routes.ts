import { Routes } from "@angular/router";
import { NotFoundPageComponent } from "./pages/not-found/not-found.component";
import { ImpressPageComponent } from "./pages/impress/impress.component";
import { PrivacyPageComponent } from "./pages/privacy/privacy";
import { AuthPageComponent } from "./pages/auth/auth.component";

export const routes: Routes = [
    {
        path: "",
        component: AuthPageComponent,
        title: "Open Teams | Authentifizierung",
    },
    {
        path: "dashboard",
        loadComponent: () => import("./pages/dashboard/dashboard.component").then(c => c.DashboardPageComponent),
        title: "Open Teams | Dashboard",
    },
    {
        path: "group/:id",
        loadComponent: () => import("./pages/group/[...id]/byid.component").then(c => c.ByIdPageComponent),
        title: "Open Teams | Gruppe",
    },
    {
        path: "impress",
        component: ImpressPageComponent,
        title: "Open Teams | Impressum",
    },
    {
        path: "privacy",
        component: PrivacyPageComponent,
        title: "Open Teams | Datenschutz",
    },
    {
        path: "**",
        component: NotFoundPageComponent,
        title: "404 - Not Found",
    },
];
