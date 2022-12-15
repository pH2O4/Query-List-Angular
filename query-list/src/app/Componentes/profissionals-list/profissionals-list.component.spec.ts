import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalsListComponent } from './profissionals-list.component';

describe('ProfissionalsListComponent', () => {
  let component: ProfissionalsListComponent;
  let fixture: ComponentFixture<ProfissionalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
