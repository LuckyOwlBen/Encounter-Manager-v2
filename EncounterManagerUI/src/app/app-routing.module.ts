import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './Components/planning/planning.component';
import { CombatComponent } from './Components/combat/combat.component';
const routes: Routes = [
  { path: 'planning', component: PlanningComponent},
  { path: 'combat', component: CombatComponent},
  { path: '', redirectTo: '/planning', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
