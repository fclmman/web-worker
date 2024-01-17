import {Injectable} from '@angular/core';
import {distinctUntilChanged, Observable, Subject} from "rxjs";
import {SocketItem} from "../socket/socket-item";
import {SettingsService} from "./settings.service";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private _messages = new Subject<SocketItem[]>();
  messages: Observable<SocketItem[]>;
  worker: Worker;

  constructor(private settingsService: SettingsService) {
    this.messages = this._messages.asObservable();
    this.worker = this.getWorker();

    this.worker.onmessage = ({data}) => {
      this.handleWorkerMessage(data);
    };

    this.settingsService.settings.pipe(
      distinctUntilChanged((prev, curr) => {
        return prev.interval === curr.interval && prev.messageSize === curr.messageSize;
      })
    ).subscribe(settings => {
      this.worker.postMessage({
        type: 'update',
        interval: settings.interval,
        messageSize: settings.messageSize
      })
    })
  }

  private getWorker() {
    return new Worker(new URL('./../worker/socket.worker', import.meta.url));
  }

  private handleWorkerMessage(data: SocketItem[]) {
    this._messages.next(data);
  }
}
