import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Tutorial';

  constructor(private http: HttpClient) {

  }

  SendPersonData() {
    let personData = {
      name: "Abdulrahman",
      nationality: "Syrian"
    };
    console.log(personData);

    this.http
      .post('https://angular-8e5d2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', personData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}