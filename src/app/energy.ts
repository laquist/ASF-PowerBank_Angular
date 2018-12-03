export class Energy {
    startTime: Date;
    endTime: Date;
    interval: Number;

    constructor (startTime: Date, endTime: Date, interval: Number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.interval = interval;
    }
}
