import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
  obj: {
    areas: { value: string }[];
  } = {
    areas: [],
  };
  form = new FormGroup({
    city: new FormControl(""),
    area: new FormControl(""),
  });
  get city() {
    return this.form.get("city") as FormControl;
  }
  get area() {
    return this.form.get("area") as FormControl;
  }
  constructor(private dyamicImportService: DyamicImportService) {}
  ngOnInit(): void {
    const progCode = "Mse1001";
    this.dyamicImportService
      .dyamicImport(`/dyamicImport/js/${progCode}.js`)
      .subscribe((res:any) => {
        res.cityChange(this.form, this.obj);
      });
    this.dyamicImportService.dyamicRequireTs(progCode).subscribe((res: any)=>{
      console.log(res.cityChange);
    });
    this.dyamicImportService.dyamicImportTs(progCode).subscribe((res: any) => {
      res.cityChange(this.form, this.obj);
    });
  }
}
