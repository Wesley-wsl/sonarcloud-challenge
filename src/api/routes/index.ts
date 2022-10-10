import { Router } from "express";
import { sumController } from "../useCases/SumUseCase";

const routes = Router();

routes.get("/:num1/:num2", (request, response) => {
  return sumController.handle(request, response);
});

export { routes };
