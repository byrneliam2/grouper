import { Injectable } from '@angular/core';

@Injectable()
export class ResourcesProvider {

  MAX_LENGTH_NAME: number = 32;
  MAX_LENGTH_SUB: number = 16;
  MAX_LENGTH_DESC: number = 64;
  MAX_LENGTH_POST: number = 140;

  constructor() {}

}
