import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="card">
      <h1>Activity 2: Live Input Preview</h1>
      <label>Type Something</label>
      <input [(ngModel)]="message" placeholder="Start typing..." />

      <div class="preview">
        <h3>Live Preview:</h3>
        <p>{{ message || 'Your text will appear here...' }}</p>
        <p><strong>Character Count:</strong> {{ message.length }}</p>
      </div>
    </section>
  `,
  styles: [`
    .preview { background: #eef4ff; padding: 16px; border-radius: 12px; }
  `]
})
export class LivePreviewComponent {
  message = '';
}
