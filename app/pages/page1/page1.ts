import {bootstrap} from 'angular2/platform/browser';
import {Page, NavController} from 'ionic-framework/ionic';
import {Post} from  '../../models/post';
import {PostService} from "../../services/PostService";
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';
import {NgFor} from 'angular2/src/common/directives/ng_for';
import {PostItemListComponent} from "../../components/post-item-list/post-item-list.component.ts";
import {PostDetailPage} from "../../components/post-detail/post-detail.component";

@Page({
    templateUrl: 'build/pages/page1/page1.html',
    providers: [PostService, HTTP_PROVIDERS],
    directives: [PostItemListComponent]
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

