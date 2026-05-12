import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

// Sections
import { HeaderComponent } from './sections/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <!-- Background effects -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-violet-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <!-- Main Container -->
      <div class="relative z-10 max-w-[1600px] mx-auto p-4 lg:p-6">

        <!-- Header - Persistent across all pages -->
        <div class="lg:col-span-12">
          <app-header></app-header>
        </div>

        <!-- Route Content -->
        <div class="mt-6">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `],
})
export class AppComponent {
  title = 'MoneyManage';
}
