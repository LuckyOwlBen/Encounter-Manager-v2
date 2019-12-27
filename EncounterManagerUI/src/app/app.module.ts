import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AddCharacterModalComponent } from './Components/add-character-modal/add-character-modal.component';
import { PlanningComponent } from './Components/planning/planning.component';
import { CombatComponent } from './Components/combat/combat.component';
import { InitiativeModalComponent } from './Components/initiative-modal/initiative-modal.component';
import { InitiativeDataService } from './Services/InitiativeData/initiative-data.service';
import { TargetComponent } from './Components/target-modal/target.component';
import { CombatDataService } from './Services/CombatData/combat-data.service';
import { TurnTrackerComponent } from './Components/turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from './Components/afflictions/afflictions.component';
import { AfflictionModalComponent } from './Components/affliction-modal/affliction-modal.component';
import { CombatEntitiesComponent } from './Components/combat-entities/combat-entities.component';
import { CurrentTurnComponent } from './Components/current-turn/current-turn.component';
import { DeathSavingThrowModalComponent } from './Components/death-saving-throw-modal/death-saving-throw-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    AddCharacterModalComponent,
    PlanningComponent,
    CombatComponent,
    InitiativeModalComponent,
    TargetComponent,
    TurnTrackerComponent,
    AfflictionsComponent,
    AfflictionModalComponent,
    CombatEntitiesComponent,
    CurrentTurnComponent,
    DeathSavingThrowModalComponent
  ],
  entryComponents: [
    AddCharacterModalComponent,
    InitiativeModalComponent,
    TargetComponent,
    AfflictionModalComponent,
    DeathSavingThrowModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    InitiativeDataService,
    CombatDataService,
    TurnTrackerComponent,
    AfflictionsComponent,
    CombatEntitiesComponent,
    CurrentTurnComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
