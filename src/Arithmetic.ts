function sum(int1: number, int2: number): number {
    return int1 + int2;
}

type OperationFunction = (i1: number, i2: number) => number

function arithmetic(operation: OperationFunction, int1: number, int2: number) {
    return operation(int1, int2)
}

arithmetic(sum, 3, 4)