import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  public opcionesMenu:any[]= [];

  constructor( private siderbarService: SidebarService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){

    this.siderbarService.cargarMenu()
        .subscribe( resp =>{
          this.opcionesMenu = resp;
          console.log(this.opcionesMenu);
        })

  }



}
