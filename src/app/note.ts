export class Note {

    title: String;
    energy: Number;
    desc: String;
    date: Date;
    id: Number;

    constructor (title: String, energy: Number, desc: String, date: Date) {
        this.title = title;
        this.energy = energy;
        this.desc = desc;
        this.date = date;
    }
}
