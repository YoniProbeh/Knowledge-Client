import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log(document.getElementById('stylesheet'));
    document.getElementById('stylesheet').remove();

    var head: HTMLHeadElement  = document.getElementsByTagName('head')[0];
    var link: HTMLLinkElement  = document.createElement('link');
    link.id   = 'stylesheet';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/Themes/bootstrap.css';
    link.media = 'all';
    head.appendChild(link);
  }
}