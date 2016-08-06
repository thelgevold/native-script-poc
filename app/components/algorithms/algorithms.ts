import {Component} from '@angular/core';
import {InsertionSort} from '../insertion-sort/insertion-sort';

@Component({
    selector: 'algorithms',
    template: '<insertion-sort></insertion-sort>',
    directives: [InsertionSort]
})

export class Algorithms {


}
