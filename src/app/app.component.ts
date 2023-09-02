import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ConstantsService, constantsService } from './core/services/constants.service';

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

  @ViewChild("appTitle")
  appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = "The best shop ever! " + this.constantsService.ApiUrl;
  }
}
