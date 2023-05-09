/* eslint-disable max-params */
import { Character } from "./character.js";

export class Adviser extends Character {
  constructor(name, houseName, age, advisedCharacter, flatteryDegree) {
    super(name, houseName, age);
    this.advisedCharacter = advisedCharacter;
    this.flatteryDegree = flatteryDegree;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
