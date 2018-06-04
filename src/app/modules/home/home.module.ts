import {NgModule} from "@angular/core";
import {UxHomeComponent} from "./home.component";
import {UxSharedModule} from "../shared/shared.module";

@NgModule({
    imports: [UxSharedModule],
    exports: [UxHomeComponent],
    declarations: [UxHomeComponent],
})
export class UxHomeModule {

}