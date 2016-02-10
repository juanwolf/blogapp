/**
 * Created by juanwolf on 10/02/16.
 */
import {Component} from 'angular2/core';
import {SafePipe} from "../pipes/safe_pipe";

@Component({
    selector: 'post-cmp',
    pipes: [SafePipe],
    template: `
    <h1>{{ title }}</h1>
    <span [outerHTML]="  content "></span>`
})
export class Post {

    title : String = 'TitleTest';
    content: String = `<h2>Test of second title</h2>`;

}