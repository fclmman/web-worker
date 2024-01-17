import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TableRowComponent} from "./table-row/table-row.component";
import {MessageService} from "../../../app/service/message.service";
import {Observable} from "rxjs";
import {TableItem} from "../../../app/model/table-item";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TableRowComponent,
    AsyncPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  messages: Observable<TableItem[]>;

  constructor(messageService: MessageService) {
    this.messages = messageService.messages;
  }
}
