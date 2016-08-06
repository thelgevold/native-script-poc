import {Component} from "@angular/core";
import {Adder} from './adder';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [Adder]
})
export class AppComponent {
    
}
