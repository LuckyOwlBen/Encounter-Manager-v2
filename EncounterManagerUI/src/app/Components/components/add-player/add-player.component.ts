import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Entity } from '../../../Models/Entity';
import { AddCharacterModalComponent } from '../../Modals/add-character-modal/add-character-modal.component';
import { InitiativeModalComponent } from '../../Modals/initiative-modal/initiative-modal.component';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {

  @Input() public newEntity: Entity;
  entities: Entity[] = [];
  selectedEntity: Entity;
  currentIndex: number;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private combatData: CombatDataService,
    ) { }

  ngOnInit() {
    this.combatData.getEntities().subscribe((entity)=>{
      this.entities = entity;
    });
    this.combatData.getCurrentEntity().subscribe((currentEntity) =>{
      this.selectedEntity = currentEntity;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open( AddCharacterModalComponent, {
      width: '15rem',
      disableClose: true,
      data: { entity: new Entity() },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newEntity = result;
        this.newEntity.currentHp = this.newEntity.maxHp;
        if (this.newEntity != null) {
          this.entities.push(this.newEntity);
        }
      }
    });
  }

  editDialog(selectedEntity): void {
    const dialogRef = this.dialog.open( AddCharacterModalComponent, {
      width: '15rem',
      data: { entity: selectedEntity }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedEntity = result;
      this.currentIndex = this.entities.indexOf(selectedEntity);
      this.entities.splice(this.currentIndex, 1 , selectedEntity);
    });
  }

  removeEntity(selectedEntity): void {
    this.currentIndex = this.entities.indexOf(selectedEntity);
    this.entities.splice(this.currentIndex, 1);
  }

  entityTransfer(): void {
    this.combatData.setEntities(this.entities);
    const dialogRef = this.dialog.open( InitiativeModalComponent, {
      width: '15rem',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/combat']);
    });
  }

}


