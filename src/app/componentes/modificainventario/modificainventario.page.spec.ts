import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificainventarioPage } from './modificainventario.page';

describe('ModificainventarioPage', () => {
  let component: ModificainventarioPage;
  let fixture: ComponentFixture<ModificainventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificainventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificainventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
