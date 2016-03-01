import {bootstrap} from 'angular2/platform/browser';
import {Page} from 'ionic-framework/ionic';
import {Post} from  '../../models/post';
import {PostService} from "../../models/PostService";
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';
import {NgFor} from 'angular2/src/common/directives/ng_for';
import {PostDetailComponent} from "../../models/post-detail.component";

@Page({
    templateUrl: 'build/pages/page1/page1.html',
    providers: [PostService, HTTP_PROVIDERS],
    directives: [PostDetailComponent]
})
export class Page1 {
    posts : Post[];

    constructor(private _postService: PostService) {    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        return this._postService.getPosts()
            .subscribe(
                posts => {
                    console.log(posts);
                    this.posts = posts;
                }
            );
    }

}

