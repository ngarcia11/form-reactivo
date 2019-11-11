import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { Empleadoss } from '../empleadoss';
import { Empleado } from '../empleado';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      firstname: new FormControl('',  [Validators.required]),
      lastname: new FormControl('',  [Validators.required]),
      bloque: new FormControl('',  [Validators.required, Validators.maxLength(3)]),
      colonia: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      age:  new FormControl('', [Validators.required, Validators.maxLength(3)]), 
      phone:  new FormControl('', [Validators.required, Validators.maxLength(8)])
    });
  }

  EmpleadoForm: FormGroup;
  empleados : Empleadoss = {
    id: 700093,  
    name: 
       {
         firstname: "Norlan",
         lastname: "Garcia"
       },
   address: 
       {
         bloque: 16,
         colonia: "Kennedy"
       },
     age: 21,  
     phone: 95257831
  };

  constructor() { 
    this.EmpleadoForm = this.createFormGroup();
  }
  ngOnInit() {
    
  }
  onResetForm() {
    this.EmpleadoForm.reset();
  }
  onSaveForm() {
      if (this.EmpleadoForm.valid){
        console.log(this.empleados, this.EmpleadoForm.value);
        this.onResetForm();
      }
      else{
        console.log("No valido");
      }
    }
  

}
