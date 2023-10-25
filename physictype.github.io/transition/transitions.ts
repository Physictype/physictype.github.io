import './easing';
class Color {
    constructor(r: number,g: number,b: number,a: number=255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    add(other: Color): Color {
        return new Color(this.r+other.r,this.g+other.g,this.b+other.b,this.a+other.a);
    }
    subtract(other: Color): Color {
        return new Color(this.r-other.r,this.g-other.g,this.b-other.b,this.a-other.a);
    }
    multiply(scalar: number): Color {
        return new Color(this.r*scalar,this.g*scalar,this.b*scalar,this.a*scalar);
    }
    r: number;
    g: number;
    b: number;
    a: number;
}



export function color(elmn: HTMLElement, start: Color, end: Color, pixelLength: number, easing: Easing): (pixels: number) => Color {
    return (pixels: number): Color => {
        return start.add((end.subtract(start)).multiply(easing.eased(pixels/pixelLength)));
    }
}