import {Component} from "@angular/core";
import {Adder} from './components/adder/adder';
import {Algorithms} from './components/algorithms/algorithms';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [Adder, Algorithms]
})
export class AppComponent {
}
