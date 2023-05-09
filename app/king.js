/* eslint-disable max-params */
import { Character } from "./character.js";

export class King extends Character {
  name;
  houseName;
  age;
  status;

  constructor(name, houseName, age, status, greetings) {
    super(name, houseName, age, status);
    this.greetings = greetings;
  }
}
