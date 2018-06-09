import {Component} from "@angular/core";
import {Connection} from "./models/connection.model";

@Component({
    selector: "ma-connections",
    templateUrl: "./connections.component.html"
})
export class MaConnectionsComponent {

    public _connections: Connection[] = [];
    public _newConnection: Connection = {} as Connection;

    constructor() {
        this._newConnection = {
            name: "",
            connectionString: "",
            options: "{}"
        };
        this._connections = [
            {
                name: "Local",
                connectionString: "mongodb://localhost:27017",
                options: "{}"
            }
        ];
    }

}