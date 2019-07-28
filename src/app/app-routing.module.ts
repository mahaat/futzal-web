import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingContainerComponent } from "./features/landing/landing-container/landing-container.component";

const routes: Routes = [{ path: "", component: LandingContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
