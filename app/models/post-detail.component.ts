/**
 * Created by juanwolf on 01/03/16.
 */
import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-framework/config/directives';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Post} from "./post";
@Component({
    selector: 'post-cmp',
    template: `<ion-card>
    <img src="{{ post.imageUrl }}">
    <ion-card-content>
        <h1>{{ post.title }}</h1>
        <span [outerHTML]="  post.content "></span>
    </ion-card-content>
</ion-card>`,
    directives: [IONIC_DIRECTIVES],
    inputs: ['post']
})
export class PostDetailComponent {
    post: Post;
}