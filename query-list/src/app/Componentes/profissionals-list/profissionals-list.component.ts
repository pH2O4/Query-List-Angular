import { Component } from '@angular/core';
import { Profissional } from 'src/app/Interfaces/profissional';

@Component({
  selector: 'app-profissionals-list',
  templateUrl: './profissionals-list.component.html',
  styleUrls: ['./profissionals-list.component.css']
})
export class ProfissionalsListComponent {
  profissionalsList: Profissional[] = [
    {Name: "Pedro", WorkArea:"Developer", LinkedinWebSite: "www.myprofile.com", Age: 99},
    {Name: "Pedro", WorkArea:"Developer", LinkedinWebSite: "www.myprofile.com", Age: 99}
  ]
  displayedColumns: string[] = ['Name', 'WorkArea', 'LinkedinWebSite', 'Age'];
}
