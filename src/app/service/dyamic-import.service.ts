import { Injectable } from "@angular/core";
import { from } from "rxjs";
declare const dyamicImportJs: (path: string) => Promise<any>;
@Injectable({
  providedIn: "root",
})
export class DyamicImportService {
  constructor() {}

  dyamicImport(path: string) {
    return from(dyamicImportJs(path));
  }

  dyamicImportTs(progCode: string) {
    switch (progCode) {
      case "Mse1001":
        return from(import("./Mse1001/Mse1001"));
      default:
        throw new Error("No Match ProgCode....");
    }
  }
}
