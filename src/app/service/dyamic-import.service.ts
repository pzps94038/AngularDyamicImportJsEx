import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
declare const dyamicImportJs: (path: string) => Promise<any>;
@Injectable({
  providedIn: "root",
})
export class DyamicImportService {

  dyamicImport<T = any>(path: string) {
    return from(dyamicImportJs(path)) as Observable<T>;
  }

  dyamicImportTs(progCode: string) {
    switch (progCode) {
      case "Mse1001":
        return from(import("./Mse1001/Mse1001")) as Observable<any>;
      default:
        throw new Error("No Match ProgCode....");
    }
  }

  dyamicRequireTs<T = any>(progCode: string) {
    try{
      return of(require(`./${progCode}/${progCode}.ts`)) as Observable<T>;
    }catch{
      throw new Error("No Match ProgCode....");
    }
  }
}
