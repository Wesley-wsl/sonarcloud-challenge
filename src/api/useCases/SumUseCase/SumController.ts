import { Request, Response } from "express";
import { SumUseCase } from "./SumUseCase";

export class SumController {
  constructor(private sumUseCase: SumUseCase) {}

  async handle(request: Request, response: Response) {
    const { num1, num2 } = request.params;

    const result = await this.sumUseCase.execute({
      firstNumber: Number(num1),
      secondNumber: Number(num2),
    });

    return response.status(200).json({
      sum: `${num1} + ${num2}`,
      result,
    });
  }
}
