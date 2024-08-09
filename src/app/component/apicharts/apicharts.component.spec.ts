import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApichartsComponent } from './apicharts.component';

describe('ApichartsComponent', () => {
  let component: ApichartsComponent;
  let fixture: ComponentFixture<ApichartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApichartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApichartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
