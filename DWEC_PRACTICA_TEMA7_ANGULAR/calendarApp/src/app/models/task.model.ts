export class Task {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public startDate: Date | undefined,
        public endDate: Date | undefined,
        public subject: string,
        public assignedPerson: string,
        public estimatedTime: number,
        public realTime: number | undefined) { }
}