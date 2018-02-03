import { Component, OnInit } from '@angular/core';
import { PalestraService } from './palesta.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-palestras',
  templateUrl: './palestras.component.html',
})
export class PalestrasComponent implements OnInit {
  palestras: JSON[] = [];

  constructor(private palestraService: PalestraService) { }

  ngOnInit() {
    this.palestras = this.palestraService.getPalestras();
    console.log(this.palestras);
  }

}
