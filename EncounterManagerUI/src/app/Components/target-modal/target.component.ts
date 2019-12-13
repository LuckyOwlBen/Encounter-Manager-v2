import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor(
    private combatDataService: CombatDataService,
    public dialogRef: MatDialogRef<TargetComponent>,
  ) { }

  hit = false;
  currentEntity: Entity;
  target: Entity;
  change: number;
  conditionKeys: string[];
  addCondition = false;

  ngOnInit() {
    this.currentEntity = this.combatDataService.getCurrentEntity();
    this.target = this.combatDataService.getTarget();
    this.conditionKeys = Array.from(this.target.condition.keys());
  }

  attackRoll(attack: number) {
    if (Number.isInteger(attack)) {
      if (attack >= this.target.armorClass) {
        this.hit = true;
        this.change = null;
      }
    }
  }
  damageTarget(damage) {
    if (Number.isInteger(damage)) {
      this.target.currentHp -= damage;
      this.hit = false;
      this.change = null;
    }
  }

  healTarget(healing: number) {
    if (Number.isInteger(healing)) {
      this.target.currentHp -= (-healing);
      this.change = null;
    }
  }

  setCondition() {
    this.addCondition = true;
  }

  inflictCondition(key: string) {
    this.target.condition.set(key, true);
    this.addCondition = false;
  }

  endActions() {
    this.combatDataService.setEntity(this.currentEntity);
    this.combatDataService.setTarget(this.target);
    this.dialogRef.close();
  }
}
