import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = 'Valider';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'orange' | 'grey' | 'red' | 'black' = 'orange';
}
