import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from '@shared/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  @Input() isCollapsed = false;

  navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/users', label: 'Users', icon: 'people' },
    { path: '/analytics', label: 'Analytics', icon: 'analytics' },
    { path: '/settings', label: 'Settings', icon: 'settings' }
  ];

  onLogout(): void {
    console.log('Logging out...');
    // Handle logout logic here
  }
}
