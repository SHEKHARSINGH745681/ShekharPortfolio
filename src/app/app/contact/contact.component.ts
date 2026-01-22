import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  phone = '+91 74568 14003';
  email = 'shekharsingh745681@gmail.com';
  linkedIn = 'https://www.linkedin.com/in/your-linkedin-id';
}
