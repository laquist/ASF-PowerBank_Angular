import { Note } from './note';

const a = new Note(
    'Gåtur', 10, 'Jeg gik en tur i skoven.', new Date('5 December, 2018, 13:00:00')
);
a.id = 1;

const b = new Note(
    'Der skete noget', -25, 'Jeg har ikke lyst til at tale om det...', new Date('5 December, 2018, 13:00:00')
);
b.id = 2;

const c = new Note(
    'Zumba', 25, 'Jeg dansede zumba i skoven med mine fantasivenner', new Date('5 December, 2018, 18:00:00')
);
c.id = 3;

const d = new Note(
    'Biograf', 10, 'Jeg så Star Wars 22', new Date('5 December, 2018, 13:00:00')
);
d.id = 4;

export const MockNotes: Note[] = [a, b, c, d];
