/* eslint-disable max-params */
import { Character } from "./character.js";

export class King extends Character {
  yearsOfReign;

  constructor(name, houseName, age, status, yearsOfReign) {
    super(name, houseName, age, status);
    this.reign = yearsOfReign;
  }
}
