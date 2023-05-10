import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  public showQRGenerator = this.route.url.pipe(
    map((url: UrlSegment[]) => url.find((segment) => segment.path === 'qr'))
  )
  constructor (private route: ActivatedRoute) {
    
  }
}

