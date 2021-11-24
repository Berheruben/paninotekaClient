import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPaneComponent } from "./SCHERMATE/add-pane/add-pane.component";
import { UserComponent } from "./SCHERMATE/user/user.component";
import { UserOrdersComponent } from "./SCHERMATE/user-orders/user-orders.component";
import { AllOrdersComponent } from "./SCHERMATE/all-orders/all-orders.component";
import { AllSandwichComponent } from "./SCHERMATE/all-sandwich/all-sandwich.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
     {
        path:'user',
        component: UserComponent
     },
     {
      path:'addPane',
      component: AddPaneComponent
     },
     {
      path:'userOrders',
      component: UserOrdersComponent
     },
     {
      path:'allOrders',
      component: AllOrdersComponent
     },
     {
      path:'allSandwich',
      component: AllSandwichComponent
     }
     ,
     {
      path:'',
      component: HomeComponent
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
