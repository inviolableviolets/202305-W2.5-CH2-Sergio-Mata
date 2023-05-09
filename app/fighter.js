/* eslint-disable max-params */
import { Character } from "./character.js";

export class Fighter extends Character {
  yearsOfReign;

  constructor(name, houseName, age, status, weapon, skill) {
    super(name, houseName, age, status);
    this.weapon = weapon;
    this.skill = skill;
    this.speech = "Primero pego y luego pregunto";
  }
}
