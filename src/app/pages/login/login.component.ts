import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';
//import 'sweetalert2/src/sweetalert2.scss';

import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  public user: any;
  public pass: any;
  public log: User;

  constructor(private _login: LoginService, private _router: Router) {

    this.log = new User('', '');

  }

  ngOnInit() {

    this.forma = new FormGroup({
      user: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, Validators.required)
    });

  }

  login() {

    this._login.signup(this.log).subscribe(
      ok => {
        this.log = new User('', '');
        this._router.navigate(['/dashboard']);
      },
      error => {
        const mensaje = error['error'];
        Swal.fire('Oops parece que esta ingresando mal tus datos :S !', mensaje.message, 'error');
      }
    );

  }

}
