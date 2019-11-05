import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePostComponent } from './edit-delete-post.component';

describe('EditDeletePostComponent', () => {
  let component: EditDeletePostComponent;
  let fixture: ComponentFixture<EditDeletePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeletePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeletePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
