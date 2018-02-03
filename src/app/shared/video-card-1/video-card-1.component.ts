import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: '[app-video-card-1]',
  templateUrl: './video-card-1.component.html',
})
export class VideoCard1Component implements OnInit {
  @Input() palestra: JSON;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitize(value: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(value);
  }

}
