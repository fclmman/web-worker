export class TableItemChild {
  id: string;
  color: string;

  constructor(options: {
    id: string;
    color: string
  }) {
    this.id = options.id;
    this.color = options.color;
  }
}
