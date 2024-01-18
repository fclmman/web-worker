import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowChildComponent } from './table-row-child.component';
import {TableItem} from "../../../../app/model/table-item";
import {MessageGenerator} from "../../../../app/socket/message-generator";
import {TableItemChild} from "../../../../app/model/table-item-child";

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
    const message = MessageGenerator.getMessage(1)[0];
    component.child = new TableItemChild(message.child);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
