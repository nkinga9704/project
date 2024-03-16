import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRecipesComponent } from './upload-recipes.component';

describe('UploadRecipesComponent', () => {
  let component: UploadRecipesComponent;
  let fixture: ComponentFixture<UploadRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadRecipesComponent]
    });
    fixture = TestBed.createComponent(UploadRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
