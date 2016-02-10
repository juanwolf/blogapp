import {Page} from 'ionic-framework/ionic';
import {Post} from  '../../models/post';

@Page({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [Post]
})
export class Page1 {
  constructor() {

  }
}
