import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      [class]="computedClasses"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'emerald' | 'violet' | 'coral' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() class = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  get computedClasses(): string {
    const classes: string[] = [];

    // Size classes
    switch (this.size) {
      case 'sm':
        classes.push('px-3', 'py-1.5', 'text-sm', 'rounded-lg');
        break;
      case 'lg':
        classes.push('px-6', 'py-3', 'text-base', 'rounded-xl');
        break;
      default:
        classes.push('px-4', 'py-2', 'text-sm', 'rounded-xl');
    }

    // Variant classes
    switch (this.variant) {
      case 'primary':
        classes.push(
          'bg-violet-600',
          'text-white',
          'hover:bg-violet-500',
          'active:bg-violet-700',
          'shadow-lg',
          'shadow-violet-500/25'
        );
        break;
      case 'secondary':
        classes.push(
          'bg-slate-800',
          'text-slate-200',
          'border',
          'border-slate-700',
          'hover:bg-slate-700',
          'hover:border-slate-600'
        );
        break;
      case 'ghost':
        classes.push(
          'bg-transparent',
          'text-slate-400',
          'hover:text-slate-200',
          'hover:bg-white/5'
        );
        break;
      case 'emerald':
        classes.push(
          'bg-emerald-600',
          'text-white',
          'hover:bg-emerald-500',
          'shadow-lg',
          'shadow-emerald-500/25'
        );
        break;
      case 'violet':
        classes.push(
          'bg-violet-600',
          'text-white',
          'hover:bg-violet-500',
          'shadow-lg',
          'shadow-violet-500/25'
        );
        break;
      case 'coral':
        classes.push(
          'bg-coral-600',
          'text-white',
          'hover:bg-coral-500',
          'shadow-lg',
          'shadow-coral-500/25'
        );
        break;
      case 'danger':
        classes.push(
          'bg-red-600',
          'text-white',
          'hover:bg-red-500',
          'shadow-lg',
          'shadow-red-500/25'
        );
        break;
    }

    if (this.fullWidth) {
      classes.push('w-full');
    }

    classes.push(this.class);

    return classes.join(' ');
  }
}
