import { Component, EventEmitter, Output } from '@angular/core';
import { ProfissionalsListComponent } from '../profissionals-list/profissionals-list.component';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent {
  @Output() changeSelected: EventEmitter<any> = new EventEmitter()

  profissionals: string[] = ['Developer', 'Doctor', 'Teacher', 'Soccer Player', 'Seller'];
  selectedOptions: string[] = [];

  onAreaListControlChanged(list: any) {
    this.selectedOptions = list.selectedOptions.selected.map((teste: any) => teste.value);
    console.log(this.selectedOptions)
    this.changeSelected.emit();
  }
}
