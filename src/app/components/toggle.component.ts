import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      role="switch"
      [attr.aria-checked]="checked"
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      [class]="checked ? 'bg-violet-600' : 'bg-slate-700'"
      (click)="toggle()"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200"
        [class.translate-x-6]="checked"
        [class.translate-x-1]="!checked"
      ></span>
    </button>
  `,
})
export class ToggleComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
