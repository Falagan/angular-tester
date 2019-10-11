import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalsService } from 'src/app/services/modals/modals.service';
import { HotelKeytel } from 'models';
import { TestService } from 'services';
import { TestAService } from 'services';
import { TestBService } from 'services';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers:[{provide: TestService, useClass: TestBService}]
})
export class HomeComponent implements OnInit {

  public formLogin: FormGroup;
  public test: HotelKeytel;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router, 
    private _modalsService: ModalsService,
    private _serviceTest: TestService) {
  }

  ngOnInit() {
    console.log('Testing librarias Angular:');
    this.test = new HotelKeytel();
    console.log('Importando una clase', this.test);
    console.log('Importando un servicio: ');
    this._serviceTest.testService();

    this.formLogin = this._formBuilder.group({
      user: ['admin', [Validators.required, Validators.minLength(5)]],
      password: ['admin', [Validators.required, Validators.minLength(5)]],
      accessOn: new Date().toISOString().substring(0, 10)
    });



  }

  /**Metodo para manejar el formulario en la vista*/
  public get lf() {
    return this.formLogin.controls;
  }

  /**Metodo submit del fomulario de autentificación*/
  public onSubmit(formLogin) {
    if (formLogin.user === 'admin' && formLogin.password === 'admin') {
      localStorage.setItem('user', formLogin.user);
      this._router.navigate(['main']);
      this._modalsService.show('waiter');
    } else {
      this._modalsService.show('error');
    }
  }

}
