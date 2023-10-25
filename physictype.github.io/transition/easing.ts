abstract class Easing {
    abstract eased(t: number): number;
}

class NoEasing extends Easing {
    contsructor(switchTime: number) {
        this.switchTime = switchTime;
    }
    eased(t: number) {
        if (t < this.switchTime) {
            return 0;
        } else {
            return 1;
        }
    }
    switchTime: number;
}
class PolyEasing extends Easing {
    constructor(...coefficients: Array<number>) {
        super();
        this.coefficients = coefficients;
    }
    eased(t: number): number {
        let sum: number = 0;
        for (let i = 0; i < this.coefficients.length; i++) {
            sum += this.coefficients[i]*Math.pow(t,this.coefficients.length-i-1);
        }
        return sum;
    }
    coefficients: Array<number>;
}