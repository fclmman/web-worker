import {Pipe, PipeTransform} from '@angular/core';
import Decimal from "decimal.js";

@Pipe({
  name: 'decimalPrecision',
  standalone: true
})
export class DecimalPrecisionPipe implements PipeTransform {

  transform(value: number, precision: number): unknown {
    return new Decimal(value).toPrecision(precision);
  }
}
