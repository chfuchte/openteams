import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';
import { Group, GroupService } from '../../../group.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-byid',
  imports: [HeaderComponent, NgForOf],
  templateUrl: './byid.component.html',
  styleUrl: './byid.component.scss'
})
export class ByIdPageComponent implements OnInit {
  group: Group | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    if (!id) {
      console.error('No id found in route');
      await this.router.navigate(['/']);
      return;
    }

    this.group = this.groupService.getGroup(id);
    if (!this.group) {
      console.error('Group not found');
      await this.router.navigate(['/']);
      return;
    }
  }

  handleOnKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.groupService.chat(this.group!.id, (event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = '';
    }
  }
}
