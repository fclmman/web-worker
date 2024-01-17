/// <reference lib="webworker" />

import {PseudoSocket} from "../socket/pseudo-socket";
import {PseudoConnection} from "../socket/pseudo-connection";

let connection: PseudoConnection;

addEventListener('message', ({data}) => {
  const interval = Number(data.interval);
  const messageSize = Number(data.messageSize)
  if (data.type === 'update' && interval > 0 && messageSize > 0) {
    if (connection) {
      connection.close();
    }
    connection = PseudoSocket.getConnection(interval, messageSize);
    connection.onMessage((message) => {
      postMessage(message);
    })
  }
});
