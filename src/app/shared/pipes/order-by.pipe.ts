import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<TInput, K extends keyof TInput>(arrayToSort: Array<TInput>, sortOptions: Map<K, boolean>): Array<TInput> {
    let fieldsToSort = Array.from(sortOptions.keys());

    let sortedArray = this.sortArray(arrayToSort.slice(), sortOptions, fieldsToSort);

    return sortedArray;
  }

  private sortArray<TInput, K extends keyof TInput>(array: Array<TInput>, sortOptions: Map<K, boolean>, fieldsToSort: Array<K>): Array<TInput> {   
    if (fieldsToSort.length == 0 || array.length == 1) {
      return array;
    }

    let fieldName = fieldsToSort[0];
    let isAsc = sortOptions.get(fieldName)!;
    array.sort((a, b) => this.defaultComparer(a, b, fieldName.toString(), isAsc));

    fieldsToSort.shift();

    let subArrays = this.splitArrayBySameValues(array, fieldName);

    let sortedSubArrays = subArrays.map(subArray => this.sortArray(subArray.slice(), sortOptions, fieldsToSort.slice()));

    return sortedSubArrays.reduce((result, subArray) => result.concat(subArray), []);
  }

  private defaultComparer(a: any, b: any, fieldName: string, isAsc: boolean) : number {

    let firstOperand = this.getFieldValue(a, fieldName);
    let secondOperand = this.getFieldValue(b, fieldName);

    if (firstOperand === secondOperand) {
      return 0;
    } else if (firstOperand < secondOperand) {
      return isAsc ? -1 : 1;
    } else {
      return isAsc ? 1 : -1;
    }
  }

  private getFieldValue(item: any, fieldName: string): any {
    let fields = fieldName.split(".");
    let result = fields.reduce((acumulator, current) => acumulator = acumulator[current], item);
    return result;
  }

  private splitArrayBySameValues<TInput, K extends keyof TInput>(array: Array<TInput>, fieldName: K): Array<Array<TInput>> {
    let result = new Array<Array<TInput>>();
    let uniqueValues = this.getUniqueValuesByField(array, fieldName);
    
    uniqueValues.forEach(uniqueValue => {
      result.push(array.filter(arrayItem => this.getFieldValue(arrayItem, fieldName.toString()) == uniqueValue));
    });

    return result;
  }

  private getUniqueValuesByField<TInput, K extends keyof TInput>(array: Array<TInput>, fieldName: K): Array<any> {
    let uniqueValues = new Array<any>();

    array.forEach((arrayItem) => {
      if (!uniqueValues.find((value) => value == this.getFieldValue(arrayItem, fieldName.toString()))) {
        uniqueValues.push(this.getFieldValue(arrayItem, fieldName.toString()));
      }
    })

    return uniqueValues;
  }
}
