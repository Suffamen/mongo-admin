import {NgModule} from "@angular/core";
import {UxHomeComponent} from "./home.component";
import {UxSharedModule} from "../shared/shared.module";
import {MaSideBarModule} from "../side-bar/side-bar.module";

@NgModule({
    imports: [
        UxSharedModule,
        MaSideBarModule
    ],
    exports: [UxHomeComponent],
    declarations: [UxHomeComponent],
})
export class UxHomeModule {

}