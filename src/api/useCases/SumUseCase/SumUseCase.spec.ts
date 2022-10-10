import { SumUseCase } from "./SumUseCase";

describe("#SumUseCase", () => {
  it("Should be able to sum correctly.", async () => {
    const sut = new SumUseCase();

    const numbers = { firstNumber: 10, secondNumber: 20 };

    const result = await sut.execute({ firstNumber: 10, secondNumber: 20 });

    expect(result).toEqual(numbers.firstNumber + numbers.secondNumber);
  });
});
