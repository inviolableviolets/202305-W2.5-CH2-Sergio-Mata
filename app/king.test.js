import { King } from "./king.js";

describe("Given a Character class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new King("Tyrion", "Lannister", 34, "alive");

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("status", "vivo");
    });
  });
});
