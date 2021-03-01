import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-prim-form',
  templateUrl: './prim-form.component.html',
  styleUrls: ['./prim-form.component.css'],
})
export class PrimFormComponent implements OnInit, OnDestroy {
  @Output() Next = new EventEmitter<Player>();
  @Output() Changes = new EventEmitter<boolean>();
  positions: Positions[] = [
    { value: 'a', viewValue: 'A' },
    { value: 'b', viewValue: 'B' },
    { value: 'c', viewValue: 'C' },
    { value: 'd', viewValue: 'D' },
    { value: 'e', viewValue: 'E' },
  ];
  pocitionC: boolean = false;

  constructor() {}
  prim: FormGroup;
  ngOnInit(): void {
    this.prim = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-z0-9]{2,254}'),
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-z0-9]{2,254}'),
      ]),
      height_inches: new FormControl(null, [
        Validators.pattern('^(0?[0-9]){0,2}(,?[0-9]?[0-9]?)?'),
      ]),

      height_feet: new FormControl(null, [
        Validators.pattern('^(0?[0-9]){0,2}(,?[0-9]?[0-9]?)?'),
      ]),
      weight_pounds: new FormControl(null, [
        Validators.pattern('^(0?[0-9]){0,2}(,?[0-9]?[0-9]?)?'),
      ]),
      position: new FormControl(null, Validators.required),
      brithday: new FormControl(null),
      coment: new FormControl(null),
      years: new FormControl(null, [Validators.pattern('^[0-9]{1,254}')]),
      Otherposition: new FormArray([]),
    });
    this.prim.controls.position.valueChanges.subscribe((value) => {
      console.log('Select Value', value);
      if (value === 'c') {
        this.pocitionC = true;
      } else {
        this.pocitionC = false;
      }
    });
  }
  onCheckboxChange(event) {
    console.log(
      'event:',
      event,
      ' checked:',
      event.checked,
      'Value',
      event.source.value
    );
    const Otherposition: FormArray = this.prim.get(
      'Otherposition'
    ) as FormArray;
    if (event.checked) {
      Otherposition.push(new FormControl(event.source.value));
    } else {
      let i: number = 0;
      Otherposition.controls.forEach((iten) => {
        if (iten.value === event.source.value) {
          Otherposition.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onNext() {
    const player: Player = this.prim.value;
    //console.log('Forms Next:', player);
    console.log('Date:', this.prim.controls.brithday.value);

    this.Next.emit(player);
    this.prim.valueChanges.subscribe((value) => {
      console.log('Form Value Changes', value, this.prim.valid);

      this.Changes.emit(value);
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
export interface Player {
  first_name: string;
  last_name: string;
  height_inches?: number;
  height_feet?: number;
  weight_pounds?: string;
  position: string;
  brithday?: Date;
  coment?: string;
  years?: string;
  Otherposition?: otherP;
}
export interface Positions {
  value: string;
  viewValue: String;
}

export interface otherP {
  a?: string;
  b?: string;
  d?: string;
  e: string;
}
