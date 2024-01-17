import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TableItemChild} from "../../../../app/model/table-item-child";

@Component({
  selector: 'app-table-row-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './table-row-child.component.html',
  styleUrl: './table-row-child.component.scss'
})
export class TableRowChildComponent {
  @Input({required: true}) child!: TableItemChild;
}
