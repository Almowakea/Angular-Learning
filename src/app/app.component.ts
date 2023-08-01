import { PerosnService } from './services/person.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Tutorial';

  constructor(private httpClient: HttpClient, private perosnService: PerosnService) { }

  ngOnInit(): void { }

  SendPersonData() {
    let personData = {
      name: "Abdulrahman",
      nationality: "Syrian"
    };

    this.perosnService.CreatePersonRecord(personData);
  }

  // This is an example of subscribing to the http request in the component it self instead of the service
  // that is injected
  GetPersonData() {
    // NOTE: Subscription is the only way that http requests happen
    // No requests will be done if no one is subscribed/interested in them

    this.perosnService.GetPersonRecord()
      .subscribe(responseData => {
        console.log(responseData);
      });;
  }
}