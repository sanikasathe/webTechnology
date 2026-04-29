import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1>Activity 5: Routing Application</h1>
      <p>This Angular app contains all activities with routing navigation.</p>
      <div class="grid">
        <a class="activity" routerLink="/student-profile">Activity 1: Student Profile Card</a>
        <a class="activity" routerLink="/live-preview">Activity 2: Live Input Preview</a>
        <a class="activity" routerLink="/directives">Activity 3: Directives</a>
        <a class="activity" routerLink="/api-users">Activity 4: API Integration</a>
      </div>
    </section>
  `,
  styles: [`
    .activity { background: #eef4ff; padding: 16px; border-radius: 12px; text-decoration: none; color: #1f3b73; font-weight: bold; }
    .activity:hover { background: #dbeafe; }
  `]
})
export class HomeComponent {}
