import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  
  constructor(private fb: FormBuilder, 
              private router: Router,
              private authservice: AuthService) {}


  miFormulario: FormGroup = this.fb.group({
    email: ['challenge@alkemy.org', [Validators.required, Validators.email]],
    password: ['react', Validators.required],
  });


  login() {
    // console.log(this.miFormulario.value);
    const {email, password } = this.miFormulario.value; // obtener el psw y email del formulario
    
    this.authservice.login(email, password)
      .subscribe( resp => {
      
        if( !resp.token ){
          console.log('========>',resp);
          Swal.fire('Error',resp.error, 'error');
          //TODO  corregir el msj de error no muestra  
          //
          
        }else{
          localStorage.setItem('token', resp.token);
          this.router.navigateByUrl('/dashboard'); // Uusario logueado
        }
       
      });
  }
}
