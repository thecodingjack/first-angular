import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AlertModule } from 'ngx-bootstrap'
import { ServerComponent } from './server/server.component'
import { AppComponent } from './app.component'
import { AlertComponent } from './alert/alert.component'
import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent
  ],
  imports: [AlertModule.forRoot(), BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
