export class Gallery{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public images?:any[],
        public userId?: number,
    ){}
}