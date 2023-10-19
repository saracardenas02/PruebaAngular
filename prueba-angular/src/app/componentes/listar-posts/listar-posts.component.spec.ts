import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostsComponent } from './listar-posts.component';

describe('ListarPostsComponent', () => {
  let component: ListarPostsComponent;
  let fixture: ComponentFixture<ListarPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPostsComponent]
    });
    fixture = TestBed.createComponent(ListarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
