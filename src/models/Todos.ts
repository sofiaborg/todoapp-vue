export class Todos {
  status: boolean;
  created: string;
  constructor(public title: string) {
    this.status = false;
    this.created = Date.now().toString();
  }
}
