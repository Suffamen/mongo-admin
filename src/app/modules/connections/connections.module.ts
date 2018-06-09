import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UxFormFieldModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/field/form/form-field.module";
import {UxLabelModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/label/label.module";
import {UxMultipleButtonModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/button/multiple-button/multiple-button.module";
import {UxTextFieldModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/field/text/text-field.module";
import {UxAceEditorModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/ace-editor/ace-editor.module";
import {UxButtonModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/button/button.module";
import {MaConnectionsComponent} from "./connections.component";
import "../../../../node_modules/brace/mode/json";
import "../../../../node_modules/brace/theme/eclipse";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UxFormFieldModule,
        UxLabelModule,
        UxMultipleButtonModule,
        UxTextFieldModule,
        UxAceEditorModule,
        UxButtonModule
    ],
    declarations: [
        MaConnectionsComponent
    ],
    exports: [
        MaConnectionsComponent
    ]
})
export class MaConnectionsModule {
}
