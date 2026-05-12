import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card.component';
import { ToggleComponent } from '../../components/toggle.component';

interface Automation {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending' | 'paused';
  icon: string;
  enabled: boolean;
}

@Component({
  selector: 'app-automations-panel',
  standalone: true,
  imports: [CommonModule, CardComponent, ToggleComponent],
  template: `
    <app-card [glass]="true" class="h-full"
      >
        <div class="h-full flex flex-col"
          >
            <div class="flex items-center justify-between mb-4"
              >
                <h3 class="text-sm font-medium text-white"
>Automações Inteligentes</h3>
                <span class="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400"
>{{ activeCount }} ativas</span>
            </div>

            <div class="flex-1 overflow-y-auto space-y-3"
              >
                <div
                  *ngFor="let automation of automations"
                  class="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div class="flex items-start justify-between gap-3"
                      >
                        <div class="flex items-start gap-3"
                          >
                            <div
                              class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                              [class]="getIconBgClass(automation.status)"
                              >
                                <svg
                                  class="w-5 h-5"
                                  [class]="getIconColorClass(automation.status)"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  >
                                    <path
                                      *ngIf="automation.icon === 'shield'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    ></path>
                                    <path
                                      *ngIf="automation.icon === 'calendar'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                    <path
                                      *ngIf="automation.icon === 'trending-up'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    ></path>
                                    <path
                                      *ngIf="automation.icon === 'bell'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    ></path>
                                    <path
                                      *ngIf="automation.icon === 'piggy-bank'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                    <path
                                      *ngIf="automation.icon === 'refresh'"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    ></path>
                                  </svg>
                            </div>

                            <div class="flex-1 min-w-0"
                              >
                                <p class="text-sm font-medium text-white truncate"
>{{ automation.name }}</p>
                                <p class="text-xs text-slate-400 mt-0.5"
>{{ automation.description }}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2"
                          >
                            <span
                              class="w-2 h-2 rounded-full"
                              [class]="getStatusDotClass(automation.status)"
                            ></span>
                            <app-toggle [(checked)]="automation.enabled"
></app-toggle>
                        </div>
                    </div>
                </div>
            </div>

            <button class="mt-4 w-full py-2 text-sm text-violet-400 hover:text-violet-300 border border-dashed border-violet-500/30 rounded-xl hover:border-violet-500/50 transition-colors"
              >
                + Nova Automação
            </button>
        </div>
    </app-card>
  `,
})
export class AutomationsPanelComponent {
  automations: Automation[] = [
    {
      id: '1',
      name: 'Reserva de Emergência',
      description: '10% da receita transferida automaticamente',
      status: 'active',
      icon: 'shield',
      enabled: true,
    },
    {
      id: '2',
      name: 'Pagamento de Faturas',
      description: 'Vencimento dia 10 - Automático',
      status: 'pending',
      icon: 'calendar',
      enabled: true,
    },
    {
      id: '3',
      name: 'Alerta de Gastos',
      description: 'Notificar ao atingir 80% do orçamento',
      status: 'active',
      icon: 'bell',
      enabled: true,
    },
    {
      id: '4',
      name: 'Investimento Mensal',
      description: 'Aporte automático em CDB',
      status: 'active',
      icon: 'trending-up',
      enabled: true,
    },
    {
      id: '5',
      name: 'Meta de Economia',
      description: 'Objetivo: R$ 10.000 até Dez',
      status: 'paused',
      icon: 'piggy-bank',
      enabled: false,
    },
    {
      id: '6',
      name: 'Sincronização BB',
      description: 'Importar extrato todo dia',
      status: 'active',
      icon: 'refresh',
      enabled: true,
    },
  ];

  get activeCount(): number {
    return this.automations.filter((a) => a.enabled).length;
  }

  getIconBgClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20';
      case 'pending':
        return 'bg-coral-500/20';
      case 'paused':
        return 'bg-slate-500/20';
      default:
        return 'bg-slate-500/20';
    }
  }

  getIconColorClass(status: string): string {
    switch (status) {
      case 'active':
        return 'text-emerald-400';
      case 'pending':
        return 'text-coral-500';
      case 'paused':
        return 'text-slate-400';
      default:
        return 'text-slate-400';
    }
  }

  getStatusDotClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-emerald-400 shadow-emerald-400/50 shadow-lg status-indicator active';
      case 'pending':
        return 'bg-coral-500 shadow-coral-500/50 shadow-lg status-indicator pending';
      case 'paused':
        return 'bg-slate-500';
      default:
        return 'bg-slate-500';
    }
  }
}
