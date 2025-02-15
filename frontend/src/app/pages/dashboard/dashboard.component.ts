import { Component } from "@angular/core";
import { HeaderComponent } from "../../header/header.component";
import { DashboardCardComponent } from "../../dashboard-card/dashboard-card.component";
import { NgFor } from "@angular/common";
import { Group, GroupService } from "../../group.service";

@Component({
    selector: "app-dashboard",
    imports: [HeaderComponent, DashboardCardComponent, NgFor],
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.scss",
})
export class DashboardPageComponent {
    groups: {
        id: string;
        name: string;
        memberCount: number;
    }[];

    constructor(groupService: GroupService) {
        this.groups = groupService.getGroups();
    }

    buildUrl(id: string) {
        return `/group/${id}`;
    }

    buildDescription(memberCount: number) {
        return `${memberCount} Mitglieder`;
    }
}
