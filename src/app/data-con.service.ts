import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleadoss } from './empleadoss';

@Injectable({
  providedIn: 'root'
})
export class DataConService {

  private empleadosCollection: AngularFirestoreCollection<Empleadoss>;

  constructor(private afs: AngularFirestore) {
    this.empleadosCollection = afs.collection<Empleadoss>('empleados');
  }

  saveMessage(newEmpleado: Empleadoss): void {
    this.empleadosCollection.add(newEmpleado);
  }
}

