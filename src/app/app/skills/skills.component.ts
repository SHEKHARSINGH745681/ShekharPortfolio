import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// ⭐ ADD THESE MATERIAL MODULES ⭐
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,

    // ⭐ Required for date range picker ⭐
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {}
