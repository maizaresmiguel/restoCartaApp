import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, Result } from 'src/app/protected/interfaces/plato-interface';
import { PlatosService } from 'src/app/protected/services/platos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


 
 platos: MenuItem[]=[];
 
  constructor(
    private router: Router,
    private platosService: PlatosService  
  ) {}

  
  ngOnInit(): void {
    this.platosService.getPlatos()
    //.subscribe( resp => { console.log(resp)
     .subscribe( resp => { this.platos = resp.menuItems
    })
   ;
  }

}
