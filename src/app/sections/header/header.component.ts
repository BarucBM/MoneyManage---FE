import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  template: `
    <app-card class="w-full" [glass]="true" [hover]="false" [noPadding]="true">
      <header class="flex items-center justify-between px-6 py-4">
        <!-- Logo -->
        <div class="flex items-center gap-3" routerLink="/">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-violet-500/30 cursor-pointer">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="text-xl font-bold text-white cursor-pointer">MoneyManage</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.href"
            routerLinkActive="text-white bg-white/10"
            class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 text-slate-400 hover:text-white hover:bg-white/5"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- User Profile -->
        <div class="flex items-center gap-3">
          <button class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>

          <div class="flex items-center gap-3 pl-4 border-l border-slate-700">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-medium text-white">João Silva</p>
              <p class="text-xs text-slate-400">Premium</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-violet-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-violet-500/20">
              JS
            </div>
          </div>
        </div>
      </header>
    </app-card>
  `,
})
export class HeaderComponent {
  navItems = [
    { label: 'Visão Geral', href: '/' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Contas', href: '/accounts' },
    { label: 'Automações', href: '/automations' },
  ];
}
