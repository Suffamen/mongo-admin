import {Component} from "@angular/core";
import {Connection} from "../connections/models/connection.model";
import {Database} from "./models/database.model";
import {Collection} from "./models/collection.model";

export interface TreeMenuItem {
    caption?: string;
    opened?: boolean;
    selected?: boolean;
    closeable?: boolean;
    disabled?: boolean;
    children?: TreeMenuItem[];
}

export interface TreeMenuItemChangeEvent {
    item: TreeMenuItem;
    originalEvent: Event;
}

@Component({
    selector: "ma-side-bar",
    templateUrl: "./side-bar.component.html"
})
export class MaSideBarComponent {

    public _connections: Connection[] = [];
    public _connectionsMenuItems: TreeMenuItem[] = [];
    public _currentConnection: Connection = {} as Connection;
    public _currentConnectionMenuItems: TreeMenuItem[] = [];
    public _databases: Database[] = [];

    constructor() {
        const self = this;

        self._connections = [
            {
                name: "Local",
                connectionString: "url",
                options: "{}"
            }
        ];
        self._currentConnection = self._connections[0];
        self._databases = [
            {
                name: "movies",
                collections: [
                    {
                        name: "system.indexes"
                    },
                    {
                        name: "test"
                    }
                ]
            }
        ];
        this.initTreeMenuItems();
    }

    private initTreeMenuItems() {
        const self = this;

        self._currentConnectionMenuItems.push({
            caption: self._currentConnection.name
        });
        self._databases.forEach((database: Database) => {
            self._currentConnectionMenuItems.push({
                caption: database.name,
                children: database.collections.map((collection: Collection) => <TreeMenuItem>{
                    caption: collection.name,
                    closeable: true
                }),
                closeable: true
            })
        });

        self._connections.forEach((connection: Connection) => {
            self._connectionsMenuItems.push({
                caption: connection.name
            });
        });
    }

}