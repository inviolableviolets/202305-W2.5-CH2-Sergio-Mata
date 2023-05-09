import { Fighter } from "./fighter.js";

describe("Given a Fighter class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new Fighter(
        "Tyrion",
        "Lannister",
        34,
        "alive",
        "sword",
        10
      );

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("status", "alive");
      expect(newObject).toHaveProperty("weapon", "sword");
      expect(newObject).toHaveProperty("skill", 10);
      expect(newObject).toHaveProperty("series", "Game of Thrones");
      expect(newObject).toHaveProperty(
        "speech",
        "Primero pego y luego pregunto"
      );
    });
  });
});
