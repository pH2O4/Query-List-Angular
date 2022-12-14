import { Component } from '@angular/core';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent {
  profissionals: string[] = ['Developer', 'Doctor', 'Teacher', 'Soccer Player', 'Seller'];
}
