import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService, Account, CreateAccountDto } from '../../services/account.service';
import { CardComponent } from '../../components/card.component';
import { ButtonComponent } from '../../components/button.component';

@Component({
  selector: 'app-accounts-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <!-- Header & Action -->
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-white">Minhas Contas</h2>
          <p class="text-sm text-slate-400">Gerencie seus saldos e contas bancárias</p>
        </div>
        <button
          (click)="toggleModal()"
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <span>+ Nova Conta</span>
        </button>
      </div>

      <!-- Accounts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <app-card *ngFor="let acc of accounts" [glass]="true" class="group relative overflow-hidden">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-start">
              <span class="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                {{ getAccountTypeLabel(acc.type) }}
              </span>
              <button (click)="deleteAccount(acc.id)" class="text-slate-500 hover:text-red-400 transition-colors">
                <small>Excluir</small>
              </button>
            </div>
            <h3 class="text-lg font-semibold text-white">{{ acc.name }}</h3>
            <p class="text-sm text-slate-400 line-clamp-1">{{ acc.description }}</p>
            <div class="mt-4">
              <span class="text-xs text-slate-500 block">Saldo Atual</span>
              <span class="text-2xl font-bold text-white">
                {{ acc.balance | currency:'BRL' }}
              </span>
            </div>
          </div>
        </app-card>
      </div>

      <!-- Modal for New Account -->
      <div *ngIf="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
        <app-card [glass]="true" class="w-full max-w-md p-6 border border-slate-700">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-white">Nova Conta</h3>
            <button (click)="toggleModal()" class="text-slate-400 hover:text-white">&times;</button>
          </div>

          <form (ngSubmit)="submitAccount()" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-xs text-slate-400">Nome da Conta</label>
              <input [(ngModel)]="newAccount.name" name="name"
                     class="bg-slate-800/50 border border-slate-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                     placeholder="Ex: Nubank, Carteira..." required>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs text-slate-400">Tipo</label>
              <select [(ngModel)]="newAccount.type" name="type"
                      class="bg-slate-800/50 border border-slate-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                <option [value]="0">Corrente</option>
                <option [value]="1">Poupança</option>
                <option [value]="2">Cartão de Crédito</option>
                <option [value]="3">Dinheiro</option>
                <option [value]="4">Investimento</option>
                <option [value]="5">Outros</option>
              </select>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs text-slate-400">Saldo Inicial</label>
              <input type="number" [(ngModel)]="newAccount.initialBalance" name="initialBalance"
                     class="bg-slate-800/50 border border-slate-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                     placeholder="0.00" required>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs text-slate-400">Descrição (Opcional)</label>
              <input [(ngModel)]="newAccount.description" name="description"
                     class="bg-slate-800/50 border border-slate-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                     placeholder="Ex: Conta principal">
            </div>

            <div class="mt-4 flex gap-2">
              <button type="button" (click)="toggleModal()" class="flex-1 px-4 py-2 text-slate-400 hover:text-white transition-colors">
                Cancelar
              </button>
              <button type="submit" class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
                Criar Conta
              </button>
            </div>
          </form>
        </app-card>
      </div>
    </div>
  `,
})
export class AccountsManagerComponent implements OnInit {
  accounts: Account[] = [];
  showModal = false;
  newAccount: CreateAccountDto = {
    name: '',
    description: '',
    type: 0,
    initialBalance: 0
  };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe(data => this.accounts = data);
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    if (!this.showModal) this.resetForm();
  }

  submitAccount(): void {
    this.accountService.createAccount(this.newAccount).subscribe(() => {
      this.loadAccounts();
      this.toggleModal();
    });
  }

  deleteAccount(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta conta?')) {
      this.accountService.deleteAccount(id).subscribe(() => {
        this.loadAccounts();
      });
    }
  }

  private resetForm(): void {
    this.newAccount = { name: '', description: '', type: 0, initialBalance: 0 };
  }

  getAccountTypeLabel(type: number): string {
    const labels = ['Corrente', 'Poupança', 'Crédito', 'Dinheiro', 'Investimento', 'Outros'];
    return labels[type] || 'Outros';
  }
}
