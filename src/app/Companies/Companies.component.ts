import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Companies',
  templateUrl: './Companies.component.html',
  styleUrls: ['./Companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
