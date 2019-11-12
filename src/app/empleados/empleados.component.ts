import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { Empleadoss } from '../empleadoss';
import { Empleado } from '../empleado';
import { DataConService } from '../data-con.service';
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

  constructor(private dbData: DataConService) { 
    this.EmpleadoForm = this.createFormGroup();
  }
  ngOnInit() {
    
  }
  onResetForm() {
    this.EmpleadoForm.reset();
  }
  onSaveForm(EmpleadoForm : Empleadoss) {
      if (this.EmpleadoForm.valid){
        this.dbData.saveMessage(this.EmpleadoForm.value)
        this.dbData.saveMessage(this.empleados)
        console.log(this.empleados, this.EmpleadoForm.value);
        this.onResetForm();
      }
      else{
        console.log("No valido");
      }
    }
    get id() { return this.EmpleadoForm.get('id'); }
    get firstname() { return this.EmpleadoForm.get('firstname'); }
    get lastname() { return this.EmpleadoForm.get('lastname'); }
    get bloque() { return this.EmpleadoForm.get(' bloque'); }
    get colonia() { return this.EmpleadoForm.get('colonia'); }
    get age() { return this.EmpleadoForm.get('age'); }
    get phone() { return this.EmpleadoForm.get('phone'); }
}
