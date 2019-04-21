import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.scss']
})
export class SearchComponent implements OnInit {
  public component: string = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.component = this.router.parent.routeConfig.path;
  }

}
