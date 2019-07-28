import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingContainerComponent } from "./features/landing/landing-container/landing-container.component";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: LandingContainerComponent
      },
      {
        path: "auth",
        loadChildren: "./features/auth/auth.module#AuthModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
