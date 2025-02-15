import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export type Group = {
  id: string;
  name: string;
  members: string[];
  chat: {
    messages: Message[];
  }
}

export type Message = {
  user: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: Group[] = [
    {
      id: '1',
      name: 'IT-Team',
      members: ['admin1', 'admin2'],
      chat: {
        messages: [
          {
            user: "admin1",
            message: "Hallo zusammen",
          },
          {
            user: "admin1",
            message: "Wollen wir bald mal wieder ein Meeting zu Cybersecurity machen?",
          },
          {
            user: "admin2",
            message: "Erst mal nen Kaffee. Vorher geht gar nichts.",
          }
        ]
      }
    },
    {
      id: '2',
      name: 'Diskussion',
      members: ['user1', 'user3'],
      chat: {
        messages: []
      }
    },
    {
      id: '3',
      name: 'SV',
      members: ['user1', 'user2'],
      chat: {
        messages: [
          {
            user: "user1",
            message: "Hallo zusammen",
          },
          {
            user: "user2",
            message: "Hallo",
          },
          {
            user: "user1",
            message: "Wie geht es euch?",
          }
        ]
      }
    },
    {
      id: '4',
      name: 'Group 4',
      members: ['user1', 'user3'],
      chat: {
        messages: []
      }
    }
  ];

  constructor(private currentUserService: AuthService) { }

  getGroups() {
    return this.groups.map((g) => {
      return {
        id: g.id,
        name: g.name,
        memberCount: g.members.length
      }
    })
  }

  getGroup(id: string) {
    return this.groups.find((g) => g.id === id);
  }

  chat(id: string, message: string) {
    const group = this.getGroup(id);
    if (group) {
      group.chat.messages.push({
        user: this.currentUserService.getUser()?.firstName || '<aynonymous>',
        message: message
      });
    }
  }
}
