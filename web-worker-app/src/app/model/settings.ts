import {defaultInterval, defaultMessageSize} from "../const/constants";

export class Settings {
  interval: number = defaultInterval;
  messageSize: number = defaultMessageSize;
  additionalIds: string[] = [];

  constructor(options: {
    interval: number;
    messageSize: number;
    additionalIds: string[];
  }) {
    this.interval = options.interval;
    this.messageSize = options.messageSize;
    this.additionalIds = options.additionalIds;
  }
}
