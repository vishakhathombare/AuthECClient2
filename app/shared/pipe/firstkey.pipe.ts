import {Pipe , PipeTransform} from '@angular/core';


@Pipe({
  name: 'firstKey',
  standalone:true  
})
export class firstKeyPipe implements PipeTransform{

transform(value:unknown, ...args: unknown[]): unknown {
    return null;
}
    
}