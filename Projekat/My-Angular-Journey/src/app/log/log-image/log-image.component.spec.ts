import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogImageComponent } from './log-image.component';

describe('LogImageComponent', () => {
  let component: LogImageComponent;
  let fixture: ComponentFixture<LogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
