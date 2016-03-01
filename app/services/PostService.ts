/**
 * Created by juanwolf on 15/02/16.
 */
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Post} from "./../models/post";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private _http: Http) {

    }

    getPosts(): Observable<Post[]> {
        return this._http.get("https://blog.juanwolf.fr/api/posts/?format=json")
            .map(res => res.json())
            .map(((posts : Array<any>) => posts.map(json => new Post(json.title, json.text, json.image))))
            .do(data => console.log(data));

    }

    getPost(id: int): Observable<Post> {
        return this._http.get("https://blog.juanwolf.fr/api/posts/" + id + "?format=json")
            .map(res => res.json())
            .map(json => new Post(json.title, json.text, json.image))
            .do(data => console.log(data));
    }
}
