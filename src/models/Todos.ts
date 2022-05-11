export class Todos {
  status: boolean;
  created: string;
  constructor(public title: string, public id: number) {
    this.status = false;
    this.created = "2022-05-10";
  }
}
