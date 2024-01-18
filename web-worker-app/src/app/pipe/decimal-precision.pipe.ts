import {Pipe, PipeTransform} from '@angular/core';
import Decimal from "decimal.js";

@Pipe({
  name: 'decimalPrecision',
  standalone: true
})
export class DecimalPrecisionPipe implements PipeTransform {
  transform(value: unknown, precision: number): unknown {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)))) {
      return new Decimal(value).toPrecision(precision);
    } else {
      throw new Error(`${value} is not a number`)
    }
  }
}
