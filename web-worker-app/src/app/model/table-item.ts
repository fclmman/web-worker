import {TableItemChild} from "./table-item-child";

export class TableItem {
  id: string;
  int: number;
  float: number;
  color: string;
  child: TableItemChild;

  constructor(options: {
    id: string;
    int: number;
    float: number;
    color: string;
    child: TableItemChild;
  }) {
    this.id = options.id;
    this.int = options.int;
    this.float = options.float;
    this.color = options.color;
    this.child = new TableItemChild(options.child);
  }
}
