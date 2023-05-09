/* eslint-disable max-params */
import { Character } from "./character.js";

export class King extends Character {
  yearsOfReign;

  constructor(name, houseName, age, yearsOfReign) {
    super(name, houseName, age);
    this.reign = yearsOfReign;
    this.speech = "Vais a morir todos";
  }
}
