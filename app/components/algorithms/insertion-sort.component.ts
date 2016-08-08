import {Component, Input} from '@angular/core';
import {InsertionSortService} from './insertion-sort.service';

@Component({
    selector: 'insertion-sort',
    templateUrl: './components/algorithms/insertion-sort.component.html',
    providers: [InsertionSortService]
})

export class InsertionSortComponent {

    @Input() list:ValList;
    btnText = 'Sort';

    constructor(private sortingService: InsertionSortService){
        this.list = new ValList();
        this.list.items = [
            new ListItem(5),
            new ListItem(33),
            new ListItem(5),
            new ListItem(4),
            new ListItem(88),
            new ListItem(40),
            new ListItem(-88),
            new ListItem(6),
            new ListItem(1),
            new ListItem(58),
            new ListItem(30)
        ];
    }

    sortList(){
        this.sortingService.sort(this.list)
    }
}

class ValList{
    items:Array<ListItem>;

    setCurrent(item){
        this.clearAll();
        item.current = true;
    }

    clearAll(){
        this.items.forEach(i => i.current = false);
    }
}

class ListItem{
    val:Number;
    current:Boolean;

    constructor(val){
        this.val = val;
        this.current = false;
    }
}