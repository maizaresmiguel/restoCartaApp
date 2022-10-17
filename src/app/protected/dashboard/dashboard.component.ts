import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { PlatoResponse, Result } from '../interfaces/plato-interface';
import { PlatosService } from '../services/platos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  {
 
 
  
  constructor(  private router: Router, private authService: AuthService ) {}


  
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  listadoDePlatos(){
   
  
  }
}
