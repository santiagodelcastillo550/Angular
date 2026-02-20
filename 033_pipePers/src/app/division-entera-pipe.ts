import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisionEntera',
  standalone: true
})
export class DivisionEnteraPipe implements PipeTransform {

  transform(value: number, divisor: number): string { 
    if (!divisor) { 
      return 'Cociente: 0 # Resto: ' + value; 
    } 
    const cociente = Math.floor(value / divisor); 
    const resto = value % divisor; 
    
    return 'Cociente: ' + cociente + ' # Resto: ' + resto;
  }

}
