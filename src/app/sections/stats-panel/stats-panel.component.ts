import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card.component';

@Component({
  selector: 'app-stats-panel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="flex flex-col gap-4">
      <!-- Financial Health Gauge -->
      <app-card [glass]="true" [gradient]="true">
        <div class="text-center">
          <h3 class="text-sm font-medium text-slate-400 mb-4">Saúde Financeira</h3>

          <div class="relative w-40 h-40 mx-auto">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                stroke-width="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="8"
                stroke-linecap="round"
                [attr.stroke-dasharray]="circumference"
                [attr.stroke-dashoffset]="strokeOffset"
                class="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#10b981" />
                  <stop offset="50%" stop-color="#8b5cf6" />
                  <stop offset="100%" stop-color="#f97316" />
                </linearGradient>
              </defs>
            </svg>

            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-3xl font-bold text-white">{{ healthScore }}%</span>
              <span class="text-xs text-emerald-400 mt-1">{{ healthStatus }}</span>
            </div>
          </div>

          <div class="mt-4 flex justify-between text-xs text-slate-400">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </app-card>

      <!-- Cash Flow Chart -->
      <app-card [glass]="true">
        <div>
          <h3 class="text-sm font-medium text-slate-400 mb-4">Fluxo de Caixa</h3>

          <div class="h-32 relative">
            <svg class="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.5" />
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
                </linearGradient>
              </defs>

              <path
                [attr.d]="areaPath"
                fill="url(#areaGradient)"
                class="transition-all duration-500"
              />

              <path
                [attr.d]="linePath"
                fill="none"
                stroke="#10b981"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-all duration-500"
              />

              <circle
                *ngFor="let point of chartPoints; let last = last"
                [attr.cx]="point.x"
                [attr.cy]="point.y"
                r="4"
                [attr.fill]="last ? '#10b981' : 'transparent'"
                [attr.stroke]="last ? '#10b981' : 'none'"
                stroke-width="2"
              />
            </svg>

            <div class="flex justify-between text-xs text-slate-500 mt-2">
              <span *ngFor="let label of monthLabels">{{ label }}</span>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <div>
              <p class="text-xs text-slate-400">Receitas</p>
              <p class="text-lg font-semibold text-emerald-400">+R$ 12.450</p>
            </div>
            <div class="text-right">
              <p class="text-xs text-slate-400">Despesas</p>
              <p class="text-lg font-semibold text-coral-500">-R$ 8.230</p>
            </div>
          </div>
        </div>
      </app-card>
    </div>
  `,
})
export class StatsPanelComponent {
  healthScore = 87;
  circumference = 2 * Math.PI * 40;

  get strokeOffset(): number {
    return this.circumference - (this.healthScore / 100) * this.circumference;
  }

  get healthStatus(): string {
    if (this.healthScore >= 80) return 'Excelente';
    if (this.healthScore >= 60) return 'Bom';
    if (this.healthScore >= 40) return 'Regular';
    return 'Atenção';
  }

  // Cash flow data (last 6 months)
  cashFlowData = [65, 45, 80, 55, 70, 85];
  monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  get chartPoints(): { x: number; y: number }[] {
    const width = 300;
    const height = 100;
    const padding = 20;
    const availableHeight = height - padding * 2;
    const availableWidth = width - padding * 2;

    return this.cashFlowData.map((value, index) => ({
      x: padding + (index / (this.cashFlowData.length - 1)) * availableWidth,
      y: height - padding - (value / 100) * availableHeight,
    }));
  }

  get linePath(): string {
    return this.generatePath(false);
  }

  get areaPath(): string {
    return this.generatePath(true);
  }

  private generatePath(isArea: boolean): string {
    const points = this.chartPoints;
    if (points.length === 0) return '';

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      path += ` Q ${midX} ${prev.y} ${curr.x} ${curr.y}`;
    }

    if (isArea) {
      const last = points[points.length - 1];
      const first = points[0];
      path += ` L ${last.x} 100 L ${first.x} 100 Z`;
    }

    return path;
  }
}
