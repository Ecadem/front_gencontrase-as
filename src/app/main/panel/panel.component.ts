import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { GenpassService } from 'src/app/services/genpass.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  resultados: any[] = [];

  
  isLoading: boolean = false;

  copied: number = 1000;


  constructor(
    private genpassService: GenpassService,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  generar(){
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0){
      return;
    }

    this.isLoading = true

    this.genpassService.genPass( valor ) 
      .subscribe( ( resp ) => {
        this.resultados = resp;
        this.isLoading = false

      })
    

  }

  copyPass(pass: string, ind: number) {
    this.clipboard.copy(pass);
    this.copied = ind
  }

}
