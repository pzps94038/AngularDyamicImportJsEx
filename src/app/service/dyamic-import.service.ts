import { Injectable } from '@angular/core';
declare const dyamicImportJs: (path: string) => Promise<any>;
@Injectable({
  providedIn: 'root',
})
export class DyamicImportService {
  path: string = '../../assets/js/file.js';
  constructor() {}

  async dyamicImport() {
    const a = await dyamicImportJs(this.path);
    console.log(a.Plus(1, 2));
  }
}
