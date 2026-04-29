import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="card">
      <h1>Contact Page</h1>
      <p>Email: student@example.com</p>
      <p>Phone: 9876543210</p>
    </section>
  `
})
export class ContactComponent {}
