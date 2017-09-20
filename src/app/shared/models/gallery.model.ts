import { Users } from './users.model'; 
import { Images } from './images.model'; 
import { Comments } from './comments.model';

export class Gallery{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public user?: Users,
        public imagesUrl?: Images[],
        public comments?: Comments[],
        public userId?: number,
    ){}
}