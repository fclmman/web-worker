import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableRowComponent} from './table-row.component';
import {TableItem} from "../../../../app/model/table-item";
import {MessageGenerator} from "../../../../app/socket/message-generator";

describe('TableRowComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
  });

  it('should fail with no Input', async () => {
    expect(() => fixture.detectChanges()).toThrow();
  });

  it('should create with valid Input', () => {
    component.message = new TableItem(MessageGenerator.getMessage(1)[0]);
    fixture.detectChanges();
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
