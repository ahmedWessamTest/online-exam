import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuthBtnComponent } from './main-auth-btn.component';

describe('MainAuthBtnComponent', () => {
  let component: MainAuthBtnComponent;
  let fixture: ComponentFixture<MainAuthBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAuthBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAuthBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
