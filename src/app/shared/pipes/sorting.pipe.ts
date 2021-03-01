import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(array: any=[], option: string, field: string) {
    if(option && field && array[0]){
      array = array.sort((a, b) => {
        if(option=="up"){
          if(Number(a[field]) < Number(b[field])){
            return - 1;
          } else if(Number(a[field]) > Number(b[field])){
            return 1;
        } else
        return 0;
        } else{
          if(Number(a[field]) > Number(b[field])){
            return - 1;
          } else if(Number(a[field]) < Number(b[field])){
            return 1;
        } else
        return 0;
        }

      
      })

      return array;
    }
    
    return array;
  }

}