/**
 * Created by juanwolf on 10/02/16.
 */

export class Post {

    constructor(public title : string, public content : string, public imageUrl: string) {}

    getIntroduction() : string {
        return this.content.substr(0, 100);
    }
}
