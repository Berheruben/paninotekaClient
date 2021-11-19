import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { UserComponent } from './user/user.component';
import { AddPaneComponent } from './add-pane/add-pane.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllSandwichComponent } from './all-sandwich/all-sandwich.component';
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
