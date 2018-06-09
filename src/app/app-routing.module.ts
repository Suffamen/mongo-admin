import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UxPageNotFoundComponent} from "./modules/shared/components/page-not-found/ux-page-not-found.component";
import {UxHomeComponent} from "./modules/home/home.component";
import {MaConnectionsComponent} from "./modules/connections/connections.component";


const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: UxHomeComponent, data: {state: "home"}},
    {path: "connections", component: MaConnectionsComponent, data: {state: "connections"}},
    {path: "**", component: UxPageNotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
