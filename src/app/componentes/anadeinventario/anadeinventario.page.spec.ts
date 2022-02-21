import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnadeinventarioPage } from './anadeinventario.page';

describe('AnadeinventarioPage', () => {
  let component: AnadeinventarioPage;
  let fixture: ComponentFixture<AnadeinventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadeinventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnadeinventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
