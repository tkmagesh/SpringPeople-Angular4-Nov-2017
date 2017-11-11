import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number;
}
@Pipe({
	name: 'sort',
	pure : true
})
export class SortPipe implements PipeTransform {
	private getComparerBy(attrName : string ) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescening(comparer : IComparer ) : IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}
	transform(value: any[], attrName: string, isDescending : boolean = false): any[] {
		console.info('sort transform triggered');
		let comparer = this.getComparerBy(attrName);
		if (isDescending){
			comparer = this.getDescening(comparer);
		}
		return value.sort(comparer);
	}
}