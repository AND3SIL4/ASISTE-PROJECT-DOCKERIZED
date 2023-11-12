import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-boton-nav',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule],
  templateUrl: './boton-nav.component.html',
  styleUrls: ['./boton-nav.component.scss'],
})
export class BotonNavComponent {
  @Input() optionButton: string = '';
}
