import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProductComponent } from './categorie-product.component';

describe('CategorieProductComponent', () => {
  let component: CategorieProductComponent;
  let fixture: ComponentFixture<CategorieProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
