import {Component} from "@angular/core";
import {Adder} from './components/adder/adder';
import {TabView, TabViewItem} from 'ui/tab-view';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [Adder]
})
export class AppComponent {
    
}
