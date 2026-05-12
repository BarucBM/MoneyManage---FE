import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card.component';
import { ButtonComponent } from '../../components/button.component';

@Component({
  selector: 'app-details-grid',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <!-- Total Wealth -->
        <app-card [glass]="true" [gradient]="true"
          >
            <div class="p-2"
              >
                <div class="flex items-center justify-between mb-3"
                  >
                    <div class="flex items-center gap-2"
                      >
                        <div class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center"
                          >
                            <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                        </div>
                        <span class="text-sm font-medium text-slate-400"
>Patrimônio Total</span>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400"
>+12.5%</span>
                </div>

                <p class="text-2xl font-bold text-white mb-1">R$ 158.420,00</p>
                <p class="text-xs text-slate-500">+ R$ 17.580 este mês</p>

                <div class="mt-4 flex items-center gap-2"
                  >
                    <div class="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden"
                      >
                        <div class="h-full bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full" style="width: 73%"></div>
                    </div>
                    <span class="text-xs text-slate-400">73%</span>
                </div>
            </div>
        </app-card>

        <!-- Expenses by Category -->
        <app-card [glass]="true"
          >
            <div class="p-2"
              >
                <div class="flex items-center gap-2 mb-4"
                  >
                    <div class="w-10 h-10 rounded-xl bg-coral-500/20 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                    </div>
                    <span class="text-sm font-medium text-slate-400"
>Gastos por Categoria</span>
                </div>

                <div class="space-y-3"
                  >
                    <div *ngFor="let category of expenseCategories"
                      >
                        <div class="flex items-center justify-between mb-1"
                          >
                            <span class="text-xs text-slate-400"
>{{ category.name }}</span>
                            <span class="text-xs font-medium" [class]="category.color"
>R$ {{ category.amount }}</span>
                        </div>
                        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"
                          >
                            <div class="h-full rounded-full transition-all" [class]="category.bgColor" [style.width.%]="category.percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </app-card>

        <!-- Quick Actions -->
        <app-card [glass]="true"
          >
            <div class="p-2"
              >
                <div class="flex items-center gap-2 mb-4"
                  >
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                    </div>
                    <span class="text-sm font-medium text-slate-400"
>Ações Rápidas</span>
                </div>

                <div class="grid grid-cols-2 gap-2"
                  >
                    <app-button variant="violet" size="sm"
                      >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                        Transação
                    </app-button>

                    <app-button variant="emerald" size="sm"
                      >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                        Investir
                    </app-button>

                    <app-button variant="secondary" size="sm"
                      >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        Relatório
                    </app-button>

                    <app-button variant="ghost" size="sm"
                      >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                          </svg>
                        Compart.
                    </app-button>
                </div>
            </div>
        </app-card>

        <!-- Market Weather -->
        <app-card [glass]="true"
          >
            <div class="p-2"
              >
                <div class="flex items-center gap-2 mb-4"
                  >
                    <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                          </svg>
                    </div>
                    <span class="text-sm font-medium text-slate-400"
>Clima do Mercado</span>
                </div>

                <div class="space-y-3"
                  >
                    <div
                      *ngFor="let index of marketIndices"
                      class="flex items-center justify-between p-2 rounded-lg bg-white/5"
                      >
                        <div class="flex items-center gap-2"
                          >
                            <span class="text-xs text-slate-400">{{ index.name }}</span>
                            <span
                              class="text-xs"
                              [class]="index.change >= 0 ? 'text-emerald-400' : 'text-coral-500'"
                              >
                                {{ index.change >= 0 ? '+' : '' }}{{ index.change }}%
                            </span>
                        </div>
                        <span class="text-sm font-semibold text-white">{{ index.value }}</span>
                    </div>
                </div>

                <div class="mt-3 flex items-center gap-2 text-xs text-slate-500"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    Atualizado: 10:42
                </div>
            </div>
        </app-card>
    </div>
  `,
})
export class DetailsGridComponent {
  expenseCategories = [
    { name: 'Moradia', amount: '2.450,00', percentage: 65, color: 'text-coral-500', bgColor: 'bg-coral-500' },
    { name: 'Alimentação', amount: '1.230,00', percentage: 35, color: 'text-emerald-400', bgColor: 'bg-emerald-400' },
    { name: 'Transporte', amount: '580,00', percentage: 20, color: 'text-violet-400', bgColor: 'bg-violet-400' },
    { name: 'Lazer', amount: '320,00', percentage: 12, color: 'text-amber-400', bgColor: 'bg-amber-400' },
  ];

  marketIndices = [
    { name: 'IBOV', value: '127.450', change: 1.25 },
    { name: 'Selic', value: '10,50%', change: -0.25 },
  ];
}
