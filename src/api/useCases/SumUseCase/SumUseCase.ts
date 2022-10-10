import { ISumDTO } from "./SumDTO";

export class SumUseCase {
  async execute({ firstNumber, secondNumber }: ISumDTO): Promise<number> {
    return firstNumber + secondNumber;
  }
}
