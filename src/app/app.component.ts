import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { DyamicImportService } from "./service/dyamic-import.service";
//declare const DyamicImportJs: (path: string) => Promise<any>;
declare let DyamicImportJs: any; // 當然 let 也可以
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "dyamic-js";
  constructor(private dyamicImportService: DyamicImportService) {}

  ngOnInit(): void {
    const progCode = "Mse1001";
    this.dyamicImportService
      .dyamicImport(`/dyamicImport/js/${progCode}.js`)
      .subscribe((res) => {
        console.log(res);
      });
    this.dyamicImportService.dyamicImportTs(progCode).subscribe((res) => {
      console.log(res);
    });
  }
}
