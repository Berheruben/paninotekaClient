import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { UserComponent } from './SCHERMATE/user/user.component';
import { AddPaneComponent } from './SCHERMATE/add-pane/add-pane.component';
import { UserOrdersComponent } from './SCHERMATE/user-orders/user-orders.component';
import { AllOrdersComponent } from './SCHERMATE/all-orders/all-orders.component';
import { AllSandwichComponent } from './SCHERMATE/all-sandwich/all-sandwich.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddPaneComponent,
    UserOrdersComponent,
    AllOrdersComponent,
    AllSandwichComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
