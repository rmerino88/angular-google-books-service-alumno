import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService 
{
    constructor(private cliente:HttpClient) { }
    getBooks(title:string):object[]
    {
        let books:object [] = [];
        let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"; 
        this.cliente.get(url+title).subscribe( (data:object[]) =>
            { 
            for (var i=0;i<data["items"].length;i++)
                {
                books.push(data["items"][i]["volumeInfo"]);
                }
        });
        return books;
      
    }

    dameTitulos(searchItem:string):string[]
    {
        let volumes:object[] = [];
        let titulos:string [] = [];
        let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"; 
        this.cliente.get(url+searchItem).subscribe( (data:object[]) =>
        { for(var i=0;i<data["items"].length;i++)
            {
                volumes.push(data["items"][i]["volumeInfo"]);
            }
        for(var i=0;i<volumes.length;i++)
            {
                titulos.push(volumes[i]["title"]);
            }
        });
        return titulos;
    }
}