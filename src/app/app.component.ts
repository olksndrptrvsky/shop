import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ConstantsService, constantsService } from './core/services/constants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: ConstantsService, useValue: constantsService },
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  private constantsService = inject(ConstantsService);


  constructor(router: Router) {
    const replacer = (key: string, value: unknown): string =>
      typeof value === 'function' ? value.name : (value as string);

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

  @ViewChild("appTitle")
  appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = "The best shop ever! " + this.constantsService.ApiUrl;
  }
}
