import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoRegionComponent } from './johto-region.component';

describe('JohtoRegionComponent', () => {
  let component: JohtoRegionComponent;
  let fixture: ComponentFixture<JohtoRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohtoRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
