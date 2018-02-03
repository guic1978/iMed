import { Component, OnInit } from '@angular/core';
import { PalestraService } from '../palesta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-palestra',
  templateUrl: './palestra.component.html',
})
export class PalestraComponent implements OnInit {
  palestra: any = '';
  safeUrl: SafeUrl = 'https://www.youtube.com/embed/';

  constructor(private palestraService: PalestraService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPalestra(id);
  }

  getPalestra(id: string) {
    this.palestraService.getPalestra(id).subscribe(
      (palestra: JSON) => {
         this.palestra = palestra;
         this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.safeUrl + this.palestra.items[0].id);
      }
    );
  }

}
