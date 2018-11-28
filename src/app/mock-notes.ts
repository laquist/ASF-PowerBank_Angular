import { Note } from './note';

export const MockNotes: Note[] = [
    {
        id: 1,
        title: 'Gåtur',
        energy: +10,
        desc: 'Jeg gik en tur i skoven.',
        date: new Date('November 20, 2018, 13:00:00')
    },

    {
        id: 2,
        title: 'Klement viste mig hans koldbrand',
        energy: -25,
        desc: 'Jeg har ikke lyst til at tale om det...',
        date: new Date('November 25, 2018, 13:00:00')
    },

    {
        id: 3,
        title: 'Zumba',
        energy: +25,
        desc: 'Jeg dansede zumba i skoven med mine fantasivenner',
        date: new Date('November 26, 2018, 18:00:00')
    },

    {
        id: 4,
        title: 'Biograf',
        energy: +10,
        desc: 'Jeg så Star Wars 22',
        date: new Date('November 28, 2018, 13:00:00')
    }
];
