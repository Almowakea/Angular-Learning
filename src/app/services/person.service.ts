import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })

export class PerosnService {

    constructor(private httpClient: HttpClient) { }

    CreatePersonRecord(personData: PersonData) {
        this.httpClient
            .post('https://angular-8e5d2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', personData)
            .subscribe(responseData => {
                console.log(responseData);
            });
    }

    GetPersonRecord() {
        return this.httpClient
            .get<{ [key: string]: PersonData }>('https://angular-8e5d2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
            .pipe(map((responseData) => {
                const personList = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key))
                        personList.push({ id: key, ...responseData[key] });
                }

                return personList;
            }));
    }

    DeleteAllRecords() {
        return this.httpClient
            .delete('https://angular-8e5d2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
    }

}