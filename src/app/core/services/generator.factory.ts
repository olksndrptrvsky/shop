import { GeneratorService } from "./generator.service";

export const GeneratorFactory = function (generator: GeneratorService): (n: number) => string
{
    return (length) => generator.generate(length);
}