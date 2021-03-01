import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Player, otherP } from './prim-form/prim-form.component';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  player: Player = null;
  age;
  @Input() next: boolean = true;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      prim: new FormControl(null, Validators.required),
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  goForward(stepper: MatStepper, event: Player) {
    this.firstFormGroup.controls.prim.setValue(true);
    console.log('Registros event: ', event, this.firstFormGroup.value);
    this.player = event;
    if (event.brithday !== null) {
      const convert = new Date(event.brithday);
      const time = Math.abs(Date.now() - convert.getTime());
      this.age = Math.floor(time / (1000 * 3600 * 24) / 365);
    }
    stepper.next();
  }
  changesPrim(event: any) {
    this.firstFormGroup.controls.prim.setValue(null);
    console.log('changed form to null');
  }
}
