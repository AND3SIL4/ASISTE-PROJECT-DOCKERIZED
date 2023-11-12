import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Options {
  value: string;
  name: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  // Entrada de parametros para componente
  @Input() title: string = 'Default title';
  @Input() options: Options[] = [];
  @Input() errorMessage: string = '';
  @Input() formControl!: FormControl;

  selected = new FormControl('', [Validators.required]);
}
