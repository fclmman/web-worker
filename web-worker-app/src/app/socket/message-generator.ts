import {SocketItem} from "./socket-item";
import {SocketItemChild} from "./socket-item-child";
import {randColor, randFloat, randNumber, randUuid} from "@ngneat/falso";

export class MessageGenerator {
  static getMessage(size: number) {
    return Array(size).fill(0).map(this.generateMessage);
  }

  private static generateMessage(): SocketItem {
    return {
      id: randUuid(),
      int: randNumber(),
      float: randFloat({
        min: 0,
        fraction: randNumber({
          min: 1,
          max: 18
        })
      }),
      color: randColor(),
      child: MessageGenerator.generateChild()
    }
  }

  private static generateChild(): SocketItemChild {
    return {
      id: randUuid(),
      color: randColor(),
    }
  }
}
