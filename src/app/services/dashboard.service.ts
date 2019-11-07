import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Global } from './global.service';


@Injectable()
export class DashboardService {

  public url: string;
  public token: string;

  constructor(private _http: HttpClient, public _router: Router) {
    this.url = Global.url;

  }

  refund(refund: any ) {
    console.log(typeof refund);
    console.log(refund);

    const json = JSON.stringify(refund);
    console.log(typeof json);
    console.log(json);
    const params = json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'bearer ' + localStorage.getItem('token'));

    return this._http.post(this.url + 'refundDebtBase', params, { headers });

  }

  logout() {

    localStorage.removeItem('token');
    localStorage.clear();
    this._router.navigate(['/login']);

  }

}
