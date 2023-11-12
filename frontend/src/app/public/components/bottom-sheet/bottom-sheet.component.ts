import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { VirtualAsisstantService } from 'src/app/private/services/virtual-asisstant.service';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  // Metodo para abrir la ventana modal en la parte inferior de la pantalla
  openBottomSheet(): void {
    this._bottomSheet.open(ContenBottomSheet);
  }
}

export interface DataChatBot {
  text: string;
  isReceived: boolean;
}

@Component({
  selector: 'conten-bottom-sheet',
  templateUrl: './contentBottom.html',
  styleUrls: ['./contenBottom.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContenBottomSheet {
  // Varible que se renderiza en el template y muestra los mensajes
  messages: DataChatBot[] = [
    {
      text: 'Hello! :) soy tu asistente virtual, ¿en que te puedo ayudar?',
      isReceived: true,
    },
  ];

  constructor(private _virtualAssistantService: VirtualAsisstantService) {}
  textControl: FormControl = new FormControl();

  // Metodo para hacer el llamado a la API del asistente virtual
  onClickSentMessage() {
    if (this.textControl.value.trim() === '') {
      alert('Ojo con eso manito...');
    }

    this.messages.push({
      text: this.textControl.value,
      isReceived: false,
    });

    this._virtualAssistantService
      .sendPostReuest(this.textControl.value)
      .subscribe({
        next: (response) => {
          const respuesta = response.answers[0].answer;
          this.messages.push({
            text: respuesta,
            isReceived: true,
          });
        },
        error: (error) => console.error(error),
      });
    this.textControl.reset();
  }
}
