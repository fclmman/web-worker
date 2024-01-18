import {Injectable} from '@angular/core';
import {WorkerService} from "./worker.service";
import {combineLatest, map, Observable, scan} from "rxjs";
import {TableItem} from "../model/table-item";
import {SocketItem} from "../socket/socket-item";
import {defaultTableSize} from "../const/constants";
import {SettingsService} from "./settings.service";
import {mergeArrays} from "../util/merge-arrays";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Observable<TableItem[]>;

  constructor(private workerService: WorkerService, private settingsService: SettingsService) {
    const messages = this.workerService.messages.pipe(
      scan((acc: SocketItem[], curr: SocketItem[]) => {
          return mergeArrays(acc, curr, defaultTableSize).map(item => {
            return new TableItem(item);
          });
        }, []
      ),
    );

    this.messages = combineLatest([messages, settingsService.settings]).pipe(
      map(([messages, settings]) => {
        if (settings && settings.additionalIds.length) {
          settings.additionalIds.forEach((id, index) => {
            if (messages[index]) {
              messages[index].id = id;
            }
          })
        }
        return messages;
      })
    )
  }


}
