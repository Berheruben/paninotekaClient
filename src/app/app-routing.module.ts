import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPaneComponent } from "./add-pane/add-pane.component";
import { UserComponent } from "./user/user.component";
import { UserOrdersComponent } from "./user-orders/user-orders.component";

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
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
