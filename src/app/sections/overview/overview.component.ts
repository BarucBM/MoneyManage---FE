import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Sections
import { StatsPanelComponent } from '../stats-panel/stats-panel.component';
import { HeroIsometricComponent } from '../hero-isometric/hero-isometric.component';
import { AutomationsPanelComponent } from '../automations-panel/automations-panel.component';
import { DetailsGridComponent } from '../details-grid/details-grid.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    StatsPanelComponent,
    HeroIsometricComponent,
    AutomationsPanelComponent,
    DetailsGridComponent,
  ],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <!-- Left Panel - Stats (280px fixed) -->
      <div class="lg:col-span-3 xl:col-span-3">
        <app-stats-panel></app-stats-panel>
      </div>

      <!-- Center Panel - Hero Isometric (flexible) -->
      <div class="lg:col-span-6 xl:col-span-6">
        <app-hero-isometric></app-hero-isometric>
      </div>

      <!-- Right Panel - Automations (280px fixed) -->
      <div class="lg:col-span-3 xl:col-span-3">
        <div class="lg:h-[600px]">
          <app-automations-panel></app-automations-panel>
        </div>
      </div>

      <!-- Footer Grid - Details (Full Width) -->
      <div class="lg:col-span-12">
        <app-details-grid></app-details-grid>
      </div>
    </div>
  `,
})
export class OverviewComponent {}
