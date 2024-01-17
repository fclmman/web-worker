import {SocketItem} from "./socket-item";
import {MessageGenerator} from "./message-generator";

export class PseudoConnection {
  private _interval!: number;
  private set interval(value: number) {
    if (value < 1) {
      value = 1;
    }
    this._interval = value;
  }

  private get interval() {
    return this._interval
  }

  private _messageSize!: number;
  private set messageSize(value: number) {
    if (value < 1) {
      value = 1;
    }
    this._messageSize = value;
  }

  private get messageSize() {
    return this._messageSize
  }

  private intervalId?: NodeJS.Timeout;

  constructor(interval: number, messageSize: number) {
    this.interval = interval;
    this.messageSize = messageSize;
  }

  onMessage(messageCallback: (message: SocketItem[]) => void) {
    this.intervalId = setInterval(() => {
      messageCallback(MessageGenerator.getMessage(this.messageSize))
    }, this.interval);
  }

  updateParameters(interval: number, messageSize: number) {
    this.interval = interval;
    this.messageSize = messageSize;
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  close() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
