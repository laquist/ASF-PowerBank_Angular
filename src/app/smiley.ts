export class Smiley {

    name: string;
    desc: string;
    energy: number;
    imgPath: string;

    constructor (name: string, desc: string, energy: number, imgPath: string) {
        this.name = name;
        this.desc = desc;
        this.energy = energy;
        this.imgPath = imgPath;
    }
}
