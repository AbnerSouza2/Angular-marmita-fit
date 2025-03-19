import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CategoriasComponent } from '../../components/categorias/categorias.component';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';
import { CarouselItensPromocaoComponent } from '../../components/carousel-itens-promocao/carousel-itens-promocao.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, CategoriasComponent, CatalogoComponent, CarouselItensPromocaoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
