import {Injectable} from "@angular/core";

@Injectable()
export class UxLocalStorageService {
    constructor() {
        console.log("Create instance of LocalStorageService: " + Date.now());
    }

    public getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    public setItem(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}