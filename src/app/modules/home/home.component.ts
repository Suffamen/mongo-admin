import {Component, HostBinding} from "@angular/core";
import {UxLocalStorageService} from "../shared/services/local-storage.service";

@Component({
    selector: "ux-home",
    templateUrl: "./home.component.html"
})
export class UxHomeComponent {

    @HostBinding("class") classes = "ux-home";

    public greetingsText: string = "Home module content";

    constructor() {}
}
