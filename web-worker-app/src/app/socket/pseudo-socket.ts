import {PseudoConnection} from "./pseudo-connection";

export class PseudoSocket {
  static getConnection(interval: number, messageSize: number): PseudoConnection {
    return new PseudoConnection(interval, messageSize);
  }
}
