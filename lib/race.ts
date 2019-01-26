interface Car {
    color: string,
    speed: number,
}

class Race {
    cars: Car[];

    constructor() {
        this.cars = [];
    }

    addCar(color: string, speed: number) {
        this.cars.push({ color, speed });
    }

    findWinner(): (Car | null) {
        if (this.cars.length === 0) {
            return null;
        }

        return this.cars.reduce((a, b) => a.speed > b.speed ? a : b);
    }
}
module.exports = new Race();
