import { NgModule } from "@angular/core";
import { MyTicketsComponent } from "./pages/my-tickets/my-tickets.component"
import { LoginComponent } from "./pages/login/login.component";
import { BrowseComponent } from "./pages/browse/browse.component";
@NgModule({
    declarations:[
        LoginComponent,
        BrowseComponent,
        MyTicketsComponent
    ],
})

export class AppModule {}