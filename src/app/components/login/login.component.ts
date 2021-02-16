import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor() { 
  	this.forma = new FormGroup({
	    usuario: new FormControl(null, Validators.required),
	    password: new FormControl(null, Validators.required),
	    condiciones: new FormControl(null, Validators.required)
	});
  }

  ngOnInit(): void {

  	
  }

  acceder(){

  }


}
