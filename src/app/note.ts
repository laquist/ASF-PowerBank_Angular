export class Note {

    title: string;
    energy: number;
    desc: string;
    date: Date;
    id: number;

    constructor (title: string, energy: number, desc: string, date: Date) {
        this.title = title;
        this.energy = energy;
        this.desc = desc;
        this.date = date;
    }
}
