import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'filterStudent'
})
export class FilterPipe implements PipeTransform{
    transform(items:any[],searchText: string):any[]
    {
        if(!items)
        {
            return [];
            
        }
        if(!searchText)
        { 
            return items;
        }
        searchText =  searchText.toLowerCase();
        return items.filter(it=>{
            return it.name.toLowerCase().includes(searchText) || it.school.toLowerCase().includes(searchText) || it.grade.toLowerCase().includes(searchText);;
        })
    }
}