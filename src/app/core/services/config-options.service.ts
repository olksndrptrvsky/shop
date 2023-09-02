import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

type PartialConfig = Partial<ConfigModel>;

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel = new ConfigModel(-1, "no-login", "no-email");

  constructor() { }

  getConfig() : ConfigModel | undefined {
    return this.config;
  }

  setConfig(config: PartialConfig) {
    this.config = { ...this.config, ...config };
  }

  setConfigProperty<T extends keyof ConfigModel>(key: T, value: ConfigModel[T]) {
    if (this.config && key in this.config)
    {
      this.config[key] = value;
    }
  }
}
