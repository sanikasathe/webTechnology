import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="card">
      <h1>Activity 1: Student Profile Card</h1>
      <label>Change Profile Image URL</label>
      <input [(ngModel)]="profileImage" placeholder="Enter image URL" />

      <div class="profile-card">
        <img [src]="profileImage" alt="Student Profile Image" />
        <h2>{{ studentName }}</h2>
        <p><strong>Course:</strong> {{ course }}</p>
      </div>
    </section>
  `,
  styles: [`
    .profile-card { max-width: 330px; padding: 20px; border-radius: 14px; background: #eef4ff; text-align: center; margin-top: 15px; }
    img { width: 150px; height: 150px; object-fit: cover; border-radius: 50%; border: 4px solid white; }
  `]
})
export class StudentProfileComponent {
  studentName = 'Sanika Sathe';
  course = 'Computer Science';
  profileImage = 'https://i.pravatar.cc/300?img=5';
}
