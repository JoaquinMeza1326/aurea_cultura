import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtypeEditComponent } from './eventtype-edit.component';

describe('EventtypeEditComponent', () => {
  let component: EventtypeEditComponent;
  let fixture: ComponentFixture<EventtypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventtypeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventtypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
