import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor( private http: HttpClient) { }

  cargarMenu(){
    const url= `${base_url}empleados/menu`;
    return this.http.get<any []>( url )
    .pipe(
      map( (resp:any) => resp.menu)
    );
  }


}
