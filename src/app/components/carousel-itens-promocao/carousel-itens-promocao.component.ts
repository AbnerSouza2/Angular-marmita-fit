import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-itens-promocao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-itens-promocao.component.html',
  styleUrls: ['./carousel-itens-promocao.component.css']
})
export class CarouselItensPromocaoComponent implements OnInit {

  pratosPromocao = [
    {
      nome: 'Frango Fit',
      foto: 'assets/prato1.jpg',
      valorOriginal: 'R$ 20,00',
      valorPromocional: 'R$ 17,00',
      whatsapp: '5511999999999'
    },
    {
      nome: 'Salmão Grelhado',
      foto: 'assets/prato2.jpg',
      valorOriginal: 'R$ 30,00',
      valorPromocional: 'R$ 25,00',
      whatsapp: '5511888888888'
    },
    {
      nome: 'Salada Especial',
      foto: 'assets/prato3.jpg',
      valorOriginal: 'R$ 15,00',
      valorPromocional: 'R$ 12,00',
      whatsapp: '5511777777777'
    },
    {
      nome: 'Steak Fit',
      foto: 'assets/prato4.jpg',
      valorOriginal: 'R$ 28,00',
      valorPromocional: 'R$ 23,00',
      whatsapp: '5511666666666'
    },
    {
      nome: 'Veggie Bowl',
      foto: 'assets/prato5.jpg',
      valorOriginal: 'R$ 18,00',
      valorPromocional: 'R$ 14,00',
      whatsapp: '5511555555555'
    },
    {
      nome: 'Panqueca de Aveia',
      foto: 'https://www.pinterest.com/pin/668362400938026194/',
      valorOriginal: 'R$ 18,00',
      valorPromocional: 'R$ 15,00',
      whatsapp: '551122223333'
    },
    {
      nome: 'Wrap Integral de Frango',
      foto: 'assets/prato7.jpg',
      valorOriginal: 'R$ 22,00',
      valorPromocional: 'R$ 18,00',
      whatsapp: '551133334444'
    },
    {
      nome: 'Espaguete de Abobrinha',
      foto: 'assets/prato8.jpg',
      valorOriginal: 'R$ 25,00',
      valorPromocional: 'R$ 20,00',
      whatsapp: '551144445555'
    },
    {
      nome: 'Hambúrguer Fit',
      foto: 'assets/prato9.jpg',
      valorOriginal: 'R$ 28,00',
      valorPromocional: 'R$ 23,00',
      whatsapp: '551155556666'
    },
    {
      nome: 'Strogonoff Low Carb',
      foto: 'assets/prato10.jpg',
      valorOriginal: 'R$ 26,00',
      valorPromocional: 'R$ 21,00',
      whatsapp: '551166667777'
    },
    {
      nome: 'Risoto Integral de Cogumelos',
      foto: 'assets/prato11.jpg',
      valorOriginal: 'R$ 30,00',
      valorPromocional: 'R$ 25,00',
      whatsapp: '551177778888'
    },
    {
      nome: 'Poke Fit',
      foto: 'assets/prato12.jpg',
      valorOriginal: 'R$ 35,00',
      valorPromocional: 'R$ 28,00',
      whatsapp: '551188889999'
    },
    {
      nome: 'Escondidinho de Batata-doce',
      foto: 'assets/prato13.jpg',
      valorOriginal: 'R$ 27,00',
      valorPromocional: 'R$ 22,00',
      whatsapp: '551199990000'
    },
    {
      nome: 'Crepioca de Queijo Branco',
      foto: 'assets/prato14.jpg',
      valorOriginal: 'R$ 15,00',
      valorPromocional: 'R$ 12,00',
      whatsapp: '551133336666'
    },
    {
      nome: 'Sopa Detox de Legumes',
      foto: 'assets/prato15.jpg',
      valorOriginal: 'R$ 20,00',
      valorPromocional: 'R$ 16,00',
      whatsapp: '551122221111'
    }
    
   
  ];

  pratosAgrupados: any[] = [];

  ngOnInit(): void {
    this.agruparPratos();
  }

  agruparPratos() {
    const grupoTamanho = 4;
    for (let i = 0; i < this.pratosPromocao.length; i += grupoTamanho) {
      this.pratosAgrupados.push(this.pratosPromocao.slice(i, i + grupoTamanho));
    }
  }

  getWhatsAppLink(numero: string) {
    return `https://wa.me/${numero}`;
  }
}
