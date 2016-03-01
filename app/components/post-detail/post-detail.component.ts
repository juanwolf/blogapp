/**
 * Created by juanwolf on 01/03/16.
 */
import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-framework/config/directives';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from "./../../models/post";
import {Page, NavParams} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/components/post-detail/post-detail.html',
    directives: [IONIC_DIRECTIVES],
    inputs: ['post']
})
export class PostDetailPage {
    post: Post;
    imageUrlRegexp: RegExp = new RegExp(/src="\/media/g);

    constructor(params: NavParams) {
        this.post = params.data.post;
        this.changeImageUrls();
    }

    changeImageUrls(): void {
        if (this.imageUrlRegexp.test(this.post.content)) {
            this.post.content = this.post.content.replace(this.imageUrlRegexp, 'src="https://blog.juanwolf.fr/media');
        }
    }
}