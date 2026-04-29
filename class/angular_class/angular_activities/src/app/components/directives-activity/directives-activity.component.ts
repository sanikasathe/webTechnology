import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-activity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="card">
      <h1>Activity 3: Directives Activity</h1>

      <h2>*ngIf</h2>
      <button (click)="showBox = !showBox">Show / Hide Div</button>
      <div *ngIf="showBox" class="box">This div is displayed using *ngIf.</div>

      <h2>*ngFor</h2>
      <div class="grid">
        <div class="box" *ngFor="let subject of subjects; let i = index">
          {{ i + 1 }}. {{ subject }}
        </div>
      </div>

      <h2>ngClass</h2>
      <button (click)="isPassed = !isPassed">Toggle Result</button>
      <div [ngClass]="isPassed ? 'pass' : 'fail'">
        Result: {{ isPassed ? 'Pass' : 'Fail' }}
      </div>

      <h2>ngStyle</h2>
      <select [(ngModel)]="selectedColor">
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightpink">Light Pink</option>
      </select>
      <div [ngStyle]="{ 'background-color': selectedColor }" class="box">
        Color changes using ngStyle.
      </div>
    </section>
  `,
  styles: [`
    .box { padding: 15px; border-radius: 10px; background: #eef4ff; margin: 10px 0; }
    .pass { padding: 15px; background: #dcfce7; color: #166534; border-radius: 10px; margin: 10px 0; }
    .fail { padding: 15px; background: #fee2e2; color: #991b1b; border-radius: 10px; margin: 10px 0; }
  `]
})
export class DirectivesActivityComponent {
  showBox = true;
  isPassed = true;
  selectedColor = 'lightblue';
  subjects = ['Angular', 'React', 'Node.js', 'MySQL'];
}
