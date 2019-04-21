import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private items: { [key: string]: any[] } = {};

  constructor() {
    this.items['Companies'] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.items['Software'] = new Array<any>();
    this.items['Procedures'] = new Array<any>();
    this.items['Products'] = new Array<any>();
    this.items['Solutions'] = new Array<any>();
  }

}
