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
    console.log(refund);
    console.log(typeof refund);

    // const json = refund;
    const params = refund;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'refundDebtBase', params, { headers });

  }

  logout() {

    localStorage.removeItem('token');
    localStorage.clear();
    this._router.navigate(['/login']);

  }

}
