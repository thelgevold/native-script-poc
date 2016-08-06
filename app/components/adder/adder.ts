import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'adder',
  template: `
    <Label text="Tap three numbers" class="title"></Label>
    <Button (tap)="add(number)" class="box" *ngFor="let number of numbers" [text]="number"></Button>
    <Label *ngIf="showSum" class="sum-box" [text]="calculation.sum"></Label>
  `
})
export class Adder{
  numbers = [1,2,3,4,5];
  sum = new Subject<number>();
  calculation = {};
  showSum = false;

  add(number){
    this.sum.next(number);
  }

  ngOnInit(){
    this.sum
        .asObservable()
        .do(a => this.showSum = false)
        .bufferCount(3)
        .subscribe(res => {
                   this.calculation = {sum:res.reduce((a,b) => a + b)};
                   this.showSum = true;
        });
  }

}