import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEditTypeComponent } from './delete-edit-type.component';

describe('DeleteEditTypeComponent', () => {
  let component: DeleteEditTypeComponent;
  let fixture: ComponentFixture<DeleteEditTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEditTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEditTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
