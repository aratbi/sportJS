import {Component, Input, OnInit, Output} from '@angular/core';
import {Exercice} from "../../../shared/program/exercice";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'sp-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss']
})
export class ExercicesListComponent implements OnInit {

  @Input() exercices: Exercice[];
  selectedExercices: Exercice[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  deplaceUp(index: number, e): void {
    e.stopImmediatePropagation();
    const inter = this.exercices[index];
    this.exercices[index] = this.exercices[index - 1];
    this.exercices[index - 1] = inter;
  }

  deplaceDown(index: number, e): void {
    e.stopImmediatePropagation();
    const inter = this.exercices[index];
    this.exercices[index] = this.exercices[index + 1];
    this.exercices[index + 1] = inter;
  }

  deleteEx(index: number): void {
    this.exercices.splice(index, 1);
  }

  selectEx(exercice: Exercice): void {
    if (this.selectedExercices.indexOf(exercice) === -1) {
      this.selectedExercices.push(exercice);
    } else {
      this.selectedExercices.splice(this.selectedExercices.indexOf(exercice));
    }
  }

  deleteAllEx(): void {
    this.selectedExercices.forEach(ex => this.exercices.splice(this.exercices.indexOf(ex), 1));
    this.selectedExercices.splice(0);
  }

}
