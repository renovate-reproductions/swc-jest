import { TestClass } from ".";

it("works", async () => {
  await expect(new TestClass().run()).resolves.toBe(true);
});
