import { SignalRService } from '../services/signalr.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
    title = 'Home Page';

    constructor(private signalRService: SignalRService) { }

    ngOnInit(): void {
        this.signalRService.hubConnection.on('MessageReceived', (msg: string) => {
            console.info('message received from server');
            console.info(msg);
        });
    }
}