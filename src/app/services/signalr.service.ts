import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";

@Injectable({
    providedIn: 'root'
})

export class SignalRService {
    hubConnection: signalR.HubConnection = {} as signalR.HubConnection;

    constructor() { }

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5110/chathub', {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
            })
            .withAutomaticReconnect()
            .build();

        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch((err: any) => console.log('Error while starting connection: ' + err));
    }


    public SendMessage = (data: any) => {
        return this.hubConnection.invoke('SendMessage', data)
            .catch((err: any) => {
                console.log('Error while sending message');
                console.error(err.toString());
            });
    }
}