import { Component, Inject, InjectionToken } from '@angular/core';
import { Direction } from './direction.model';
import { GeneratorFactory } from '../core/services/generator.factory';
import { GeneratorService } from '../core/services/generator.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { LocalStorageInstance, LocalStorageService } from '../core/services/local-storage.service';
import { ConstantsService, constantsService } from '../core/services/constants.service';

const generatedString = new InjectionToken<(n: number) => string>('random string of n');

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    { provide: ConstantsService, useValue: constantsService },
    { provide: generatedString, useFactory: GeneratorFactory, deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: LocalStorageInstance },
  ]
})
export class FirstComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  direction: Direction = Direction.Up;
  isAvailable: boolean = false;

  constructor(
    @Inject(generatedString)
    private randomString: (n: number) => string,
    private configOptionService: ConfigOptionsService,
    private localStorageService: LocalStorageService,
    private constantsService: ConstantsService,
  ) {
    const randomValue = randomString(5);
    console.log(randomValue);

    console.log("Config email before update ", configOptionService.getConfig()?.email);
    configOptionService.setConfigProperty("email", "newemail@email.com");
    console.log("Config email after update ", configOptionService.getConfig()?.email);

    const localStorageKey = "testkey";
    localStorageService.setItem(localStorageKey, randomValue);
    console.log("Value stored in LocalStorage = ", localStorageService.getItem(localStorageKey));

    console.log(constantsService.ApiUrl);
  }
}
