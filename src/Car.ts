export default class Car {

    constructor(public color: string, public maxSpeed: number) { }

    toString(): string {
        return `Car color: ${this.color}, maxSpeed: ${this.maxSpeed}`
    }

    private changeColor(color: string): void {
        this.color = color
    }
}

const car = new Car('red', 150)
console.log(car.toString())