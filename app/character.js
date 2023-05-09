export class Character {
  name;
  houseName;
  age;
  status;
  series;

  constructor(name, houseName, age, status = "alive") {
    this.name = name;
    this.houseName = houseName;
    this.age = age;
    this.series = "Game of Thrones";
    this.status = status;
  }

  die() {
    this.status = "dead";
    return this.status;
  }

  talk() {}
}
