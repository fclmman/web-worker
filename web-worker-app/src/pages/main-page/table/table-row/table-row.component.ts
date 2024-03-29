import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TableRowChildComponent} from "../table-row-child/table-row-child.component";
import {TableItem} from "../../../../app/model/table-item";
import {DecimalPrecisionPipe} from "../../../../app/pipe/decimal-precision.pipe";

@Component({
  selector: 'app-table-row',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TableRowChildComponent,
    DecimalPrecisionPipe
  ],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {
  @Input({required: true}) message!: TableItem;
}
