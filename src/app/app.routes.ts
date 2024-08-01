import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardsComponent } from './admin/compenents/dashboards/dashboards.component';
import { HomeComponent } from './ui/compenents/home/home.component';

export const routes: Routes = [
    {path:"admin",component:LayoutComponent,children:[
        //hangi sayfanın tetiklenmesini istiyorsak onu direkt compenent olarak verilir
        {path:"",component:DashboardsComponent},//bu bizim başlangıç compenent
        {path:"customers",loadChildren:()=>import("./admin/compenents/customers/customers.module").then
            (module=>module.CustomersModule)   
        },
        {path:"products",loadChildren:()=>import("./admin/compenents/products/products.module").then
            (module=>module.ProductsModule)   
        },
        {path:"orders",loadChildren:()=>import("./admin/compenents/orders/orders.module").then
            (module=>module.OrdersModule)   
        },
        ]
    },
    {path:"",component:HomeComponent},//ana sayfa olduğundan doğrudan compenent olarak verilir
    {path:"baskets", loadChildren:()=>import("./ui/compenents/baskets/baskets.module").
        then(module=>module.BasketsModule)  },
    {path:"products", loadChildren:()=>import("./ui/compenents/products/products.module").
        then(module=>module.ProductsModule)  },

];