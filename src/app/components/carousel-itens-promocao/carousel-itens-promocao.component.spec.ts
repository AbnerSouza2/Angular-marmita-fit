import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItensPromocaoComponent } from './carousel-itens-promocao.component';

describe('CarouselItensPromocaoComponent', () => {
  let component: CarouselItensPromocaoComponent;
  let fixture: ComponentFixture<CarouselItensPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItensPromocaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItensPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
