import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAdminComponent } from './recipes-admin.component';

describe('RecipesAdminComponent', () => {
  let component: RecipesAdminComponent;
  let fixture: ComponentFixture<RecipesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesAdminComponent]
    });
    fixture = TestBed.createComponent(RecipesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
