import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Contacto',
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/in/eduardovparga/'
      },
      {
        label: 'Pagina web',
        icon: 'pi pi-globe',
        url: 'https://ecadem.co/'
      },
      {
        label: 'Repos',
        icon: 'pi pi-github',
        url: 'https://github.com/Ecadem'
      }
    ];
  }

}
