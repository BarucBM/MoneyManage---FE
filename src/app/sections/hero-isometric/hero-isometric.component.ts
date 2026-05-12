import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card.component';
import { ButtonComponent } from '../../components/button.component';

@Component({
  selector: 'app-hero-isometric',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <app-card [glass]="true" [gradient]="true" class="h-full">
      <div class="flex flex-col h-full">
        <!-- Hero Title -->
        <div class="text-center mb-6">
          <h1 class="text-3xl md:text-4xl font-bold mb-2">
            <span class="text-white">Seu </span>
            <span class="text-gradient-violet">Cofre Digital</span>
          </h1>
          <p class="text-slate-400">Todas as suas finanças em um só lugar</p>
        </div>

        <!-- Isometric Visual -->
        <div class="flex-1 relative min-h-[300px]">
          <svg class="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="vaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#10b981" />
              </linearGradient>

              <linearGradient id="accountsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" />
                <stop offset="100%" stop-color="#06b6d4" />
              </linearGradient>

              <linearGradient id="investmentsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#ef4444" />
              </linearGradient>

              <linearGradient id="cardsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10b981" />
                <stop offset="100%" stop-color="#3b82f6" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Connection Lines -->
            <g stroke="rgba(139, 92, 246, 0.3)" stroke-width="2" stroke-dasharray="5,5">
              <line x1="80" y1="150" x2="180" y2="150"></line>
              <line x1="320" y1="120" x2="220" y2="150"></line>
              <line x1="200" y1="250" x2="200" y2="180"></line>
            </g>

            <!-- Central Vault -->
            <g class="animate-float" filter="url(#glow)">
              <polygon
                points="200,80 260,110 260,190 200,220 140,190 140,110"
                fill="url(#vaultGradient)"
                fill-opacity="0.2"
                stroke="url(#vaultGradient)"
                stroke-width="2"
              />

              <polygon
                points="200,80 260,110 260,130 200,100 140,130 140,110"
                fill="url(#vaultGradient)"
                fill-opacity="0.4"
              />

              <polygon
                points="260,110 260,190 240,180 240,120"
                fill="url(#vaultGradient)"
                fill-opacity="0.3"
              />

              <polygon
                points="140,110 140,190 160,180 160,120"
                fill="url(#vaultGradient)"
                fill-opacity="0.1"
              />

              <circle cx="200" cy="150" r="25" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" stroke-width="2" />
              <text x="200" y="155" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">R$</text>
            </g>

            <!-- Accounts Node (Left) -->
            <g class="hover:scale-110 transition-transform cursor-pointer">
              <rect x="30" y="125" width="50" height="50" rx="10" fill="url(#accountsGradient)" fill-opacity="0.2" stroke="url(#accountsGradient)" stroke-width="1" />
              <text x="55" y="145" text-anchor="middle" fill="#60a5fa" font-size="8">Contas</text>
              <text x="55" y="160" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">3</text>
            </g>

            <!-- Investments Node (Right) -->
            <g class="hover:scale-110 transition-transform cursor-pointer">
              <rect x="320" y="95" width="50" height="50" rx="10" fill="url(#investmentsGradient)" fill-opacity="0.2" stroke="url(#investmentsGradient)" stroke-width="1" />
              <text x="345" y="115" text-anchor="middle" fill="#fbbf24" font-size="8">Invest.</text>
              <text x="345" y="130" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">2</text>
            </g>

            <!-- Cards Node (Bottom) -->
            <g class="hover:scale-110 transition-transform cursor-pointer">
              <rect x="175" y="250" width="50" height="40" rx="8" fill="url(#cardsGradient)" fill-opacity="0.2" stroke="url(#cardsGradient)" stroke-width="1" />
              <text x="200" y="265" text-anchor="middle" fill="#34d399" font-size="7">Cartões</text>
              <text x="200" y="278" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">4</text>
            </g>

            <!-- Animated Particles -->
            <circle cx="150" cy="150" r="2" fill="#8b5cf6" fill-opacity="0.6">
              <animate attributeName="cx" values="150;200;150" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" values="150;150;150" dur="3s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>

            <circle cx="250" cy="130" r="2" fill="#10b981" fill-opacity="0.6">
              <animate attributeName="cx" values="250;200;250" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="130;150;130" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>

            <circle cx="200" cy="230" r="2" fill="#3b82f6" fill-opacity="0.6">
              <animate attributeName="cy" values="230;180;230" dur="2s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-3 gap-3 mt-4">
          <div class="text-center p-3 rounded-xl bg-white/5">
            <p class="text-xs text-slate-400">Saldo Total</p>
            <p class="text-lg font-bold text-emerald-400">R$ 45.2k</p>
          </div>
          <div class="text-center p-3 rounded-xl bg-white/5">
            <p class="text-xs text-slate-400">Investido</p>
            <p class="text-lg font-bold text-violet-400">R$ 12.8k</p>
          </div>
          <div class="text-center p-3 rounded-xl bg-white/5">
            <p class="text-xs text-slate-400">Despesas</p>
            <p class="text-lg font-bold text-coral-500">R$ 3.2k</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex gap-3 mt-4">
          <app-button variant="violet" [fullWidth]="true">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Nova Transação
          </app-button>
        </div>
      </div>
    </app-card>
  `,
})
export class HeroIsometricComponent {
  // Componente visual com dados estáticos
}
