export class Energy {
    startTime: Date;
    endTime: Date;
    interval: number;

    constructor (startTime: Date, endTime: Date, interval: number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.interval = interval;
    }
}
