import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Settings} from "../model/settings";
import {defaultInterval, defaultMessageSize} from "../const/constants";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _settings = new BehaviorSubject<Settings>(new Settings({
    interval: defaultInterval,
    messageSize: defaultMessageSize,
    additionalIds: []
  }));
  settings: Observable<Settings>;

  constructor() {
    this.settings = this._settings.asObservable()
  }

  updateSettings(settings: Settings) {
    this._settings.next(settings);
  }
}
