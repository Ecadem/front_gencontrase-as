import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GenpassService } from '../services/genpass.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  resultados: any[] = [];

  constructor(
    private genpassService:GenpassService
    ) { }

  ngOnInit(): void {
  }

  generar(){
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0){
      return;
    }

    this.genpassService.genPass( valor ) 
      .subscribe( ( resp ) => {
        this.resultados = resp;

      })
    

  }


}
