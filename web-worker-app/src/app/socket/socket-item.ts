import {SocketItemChild} from "./socket-item-child";

export interface SocketItem {
  id: string;
  int: number;
  float: number;
  color: string;
  child: SocketItemChild;
}
