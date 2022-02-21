import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoslosinventariosPage } from './todoslosinventarios.page';

describe('TodoslosinventariosPage', () => {
  let component: TodoslosinventariosPage;
  let fixture: ComponentFixture<TodoslosinventariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoslosinventariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoslosinventariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
