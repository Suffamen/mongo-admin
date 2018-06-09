import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UxAccordionModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/accordion/accordion.module";
import {UxTreeMenuModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/menu/tree-menu/tree-menu.module";
import {UxLabelModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/label/label.module"
import {MaSideBarComponent} from "./side-bar.component";

@NgModule({
    imports: [
        CommonModule,
        UxAccordionModule,
        UxTreeMenuModule,
        UxLabelModule
    ],
    declarations: [
        MaSideBarComponent
    ],
    exports: [
        MaSideBarComponent
    ]
})
export class MaSideBarModule {
}
