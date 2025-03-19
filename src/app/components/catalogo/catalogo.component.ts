import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  verPerfil(nutricionista: any) {
    console.log('Ver perfil de:', nutricionista);
  };

  nutricionistas = [
    { nome: 'Maria Silva', avaliacao: 4.9, whatsapp: '5511988889999', foto: 'assets/nutri1.jpg' },
    { nome: 'João Santos', avaliacao: 4.7, whatsapp: '5511977778888', foto: 'assets/nutri2.jpg' },
    { nome: 'Ana Oliveira', avaliacao: 4.8, whatsapp: '5511966667777', foto: 'assets/nutri3.jpg' },
    { nome: 'Matheus Cardoso', avaliacao: 4.1, whatsapp: '5511966667777', foto: 'assets/nutri4.jpg' },
    { nome: 'Jessica Silva', avaliacao: 4.3, whatsapp: '5511966667777', foto: 'assets/nutri5.jpg' },
    { nome: 'Mariana Rodrigues', avaliacao: 4.5, whatsapp: '5511966667777', foto: 'assets/nutri6.jpg' }
  ];

  
  
}


