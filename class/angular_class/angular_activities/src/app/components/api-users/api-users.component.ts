import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-api-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <h1>Activity 4: API Integration</h1>
      <p>Data fetched from JSONPlaceholder API using HttpClient and Observable.</p>

      <div *ngIf="loading" class="loading">Loading users...</div>

      <div class="grid" *ngIf="!loading">
        <div class="user-card" *ngFor="let user of users">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .user-card { background: #eef4ff; padding: 16px; border-radius: 12px; }
    h3 { margin-bottom: 5px; color: #1f3b73; }
  `]
})
export class ApiUsersComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('Failed to fetch users');
        }
      });
  }
}
