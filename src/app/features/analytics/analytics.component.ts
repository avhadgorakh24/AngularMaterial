import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Analytics Dashboard</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>View your application metrics and data analytics.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container { padding: 24px; }
  `]
})
export class AnalyticsComponent {}
