import { Note } from './note';
import { Energy } from './energy';

export class Data {
    notes: Note[];
    energy: Energy;

    constructor (notes: Note[], energy: Energy) {
        this.notes = notes;
        this.energy = energy;
    }
}
