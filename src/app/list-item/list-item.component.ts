import { Component, ViewEncapsulation } from '@angular/core';

import { ListComponent } from '../list/list.component';



@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ListItemComponent {

  items:any[]=new Array(2)
}
