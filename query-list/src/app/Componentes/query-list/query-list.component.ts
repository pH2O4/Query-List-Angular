import { Component } from '@angular/core';
import { ProfissionalsListComponent } from '../profissionals-list/profissionals-list.component';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent {
  profissionals: string[] = ['Developer', 'Doctor', 'Teacher', 'Soccer Player', 'Seller'];
  selectedOptions: string[] = [];

  onAreaListControlChanged(list: any){
    this.selectedOptions = list.selectedOptions.selected.map(test => test.value)
    console.log(this.selectedOptions)
}
}
