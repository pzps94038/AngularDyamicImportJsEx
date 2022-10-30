import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { DyamicImportService } from './service/dyamic-import.service';
//declare const DyamicImportJs: (path: string) => Promise<any>;
declare let DyamicImportJs: any; // 當然 let 也可以
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dyamic-js';
  constructor(private s: DyamicImportService) {}
}
