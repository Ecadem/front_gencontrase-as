import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenpassService {
  
  private servicioUrl: string = "https://genpass.ecademservices.com";

  constructor(private http: HttpClient) { }
  
  genPass( query: string = '' ) {
  

    const params = new HttpParams()
    .set( 'pwd', query )

    return this.http.post<any[]>(`${ this.servicioUrl }/generate_pass?pwd=${ query }`, "");
    
    


  }

}
