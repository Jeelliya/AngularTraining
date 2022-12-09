import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPostComponent } from './total-post.component';

describe('TotalPostComponent', () => {
  let component: TotalPostComponent;
  let fixture: ComponentFixture<TotalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
