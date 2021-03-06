import {bootstrap} from 'angular2/platform/browser';
import {App, Platform} from 'ionic-framework/ionic';
import {TabsPage} from './pages/tabs/tabs';
import {HTTP_PROVIDERS} from 'angular2/http';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';
import {PostService} from './services/PostService';
import {Page1} from './pages/page1/page1';

@App({
    template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item>
            Login
          </button>
          <button ion-item>
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav [root]="rootPage"></ion-nav>`,
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage: Type = TabsPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            // Keyboard.setAccessoryBarVisible(false);
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
        });
    }
}
