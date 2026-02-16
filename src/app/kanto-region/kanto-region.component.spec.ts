import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoRegionComponent } from './kanto-region.component';

describe('KantoRegionComponent', () => {
  let component: KantoRegionComponent;
  let fixture: ComponentFixture<KantoRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantoRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
