import Car from './Car'

const car = new Car('black', 160)
console.log(car.toString())

type Easing = "ease-in" | "ease-out" | "ease-in-out";
const easingValue: Easing = 'ease-in'
console.log(easingValue)