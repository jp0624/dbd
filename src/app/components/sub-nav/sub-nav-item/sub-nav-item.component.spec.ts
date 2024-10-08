import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavItemComponent } from './sub-nav-item.component';

describe('SubNavItemComponent', () => {
  let component: SubNavItemComponent;
  let fixture: ComponentFixture<SubNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
