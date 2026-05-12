import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="rounded-2xl overflow-hidden transition-all duration-300"
      [class]="computedClasses"
      [style.padding]="noPadding ? '0' : padding"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() glass = true;
  @Input() gradient = false;
  @Input() hover = true;
  @Input() noPadding = false;
  @Input() padding = '1.5rem';
  @Input() class = '';

  get computedClasses(): string {
    const classes: string[] = [];

    if (this.glass) {
      classes.push(
        'bg-slate-900/60',
        'backdrop-blur-xl',
        'border',
        'border-white/10'
      );
    }

    if (this.gradient) {
      classes.push('gradient-border');
    }

    if (this.hover) {
      classes.push(
        'hover:border-white/20',
        'hover:bg-slate-800/70',
        'hover:shadow-xl',
        'hover:shadow-violet-500/10'
      );
    }

    classes.push(this.class);

    return classes.join(' ');
  }
}
