/**
 * Created by juanwolf on 01/03/16.
 */

export class Category {
    id: int;
    name: String;
    description: String;
    slug: String;

    constructor(private id : int, private name : String, private description : String, private slug : String) {}
}
