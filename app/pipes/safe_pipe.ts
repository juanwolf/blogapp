/**
 * Created by juanwolf on 10/02/16.
 */

import {PipeTransform, Pipe} from 'angular2/core';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    transform(value, args) {
        return value;
    }
}