/**
 * Created by juanwolf on 01/03/16.
 */
import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-framework/config/directives';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from "./../../models/post";
import {PostDetailPage} from "../post-detail/post-detail.component";
import {NavController} from "ionic-framework/ionic";
@Component({
    selector: 'post-item-list-cmp',
    templateUrl: 'build/components/post-item-list/post-item-list.html',
    directives: [IONIC_DIRECTIVES],
    inputs: ['post']
})
export class PostItemListComponent {
    post: Post;

    constructor(public nav: NavController) {}

    openNavDetailsPage(post) {
        this.nav.push(PostDetailPage, {post: post});
    }
}