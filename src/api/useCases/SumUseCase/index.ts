import { SumController } from "./SumController";
import { SumUseCase } from "./SumUseCase";

export { SumUseCase } from "./SumUseCase";
export { SumController } from "./SumController";

const sumUseCase = new SumUseCase();
const sumController = new SumController(sumUseCase);

export { sumController };
