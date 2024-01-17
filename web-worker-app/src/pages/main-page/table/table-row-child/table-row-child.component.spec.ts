import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowChildComponent } from './table-row-child.component';

describe('TableRowChildComponent', () => {
  let component: TableRowChildComponent;
  let fixture: ComponentFixture<TableRowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
