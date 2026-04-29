import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <h2>Angular Activities</h2>
      <div class="links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/student-profile" routerLinkActive="active">Profile</a>
        <a routerLink="/live-preview" routerLinkActive="active">Live Preview</a>
        <a routerLink="/directives" routerLinkActive="active">Directives</a>
        <a routerLink="/api-users" routerLinkActive="active">API</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { background: #1f3b73; color: white; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    h2 { margin: 0; color: white; }
    .links { display: flex; gap: 10px; flex-wrap: wrap; }
    a { color: white; text-decoration: none; padding: 8px 10px; border-radius: 8px; }
    a.active, a:hover { background: rgba(255,255,255,0.2); }
  `]
})
export class NavbarComponent {}
