import { unescapeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {AngularFirestore}from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

  
export class ManejainventariosService {

  constructor(private db: AngularFirestore) { }
anadeInventario(costoAnualDeMantenimiento, demanda, costoDePreparacion,tiempoEntrega,costoxunidad,uid, emailUser, nombrei,cantidad){
  /*var getid = this.db.collection('id').doc('id');
  var getid2;
  getid.get().subscribe(id =>{
    getid2 = id.data();
  })*/
  this.db.collection('inventarios').add({
    uid: uid,
    autor: emailUser,
    nombrei: nombrei,
    cantidad: cantidad,
  
    costoxunidad : costoxunidad,
    tiempoEntrega : tiempoEntrega,
    demanda : demanda,
    costoDePreparacion : costoDePreparacion,
    costoAnualDeMantenimiento :costoAnualDeMantenimiento
    // id: getid2
  

  }).then(refDoc =>{
   // getid2= getid2 + 1;
    console.log(`ID del inventario => ${refDoc.id}`)
  /*  getid.update({
     'id': getid2
    })*/
    this.db.collection('inventarios').doc(refDoc.id).set(
      {
        docid: refDoc.id
      },
      {
        merge:true
      }
    )
  }).catch(error=>{
    console.error(`Error creando el post => ${error}`)
  })


 }
 
 
 
 delete (id) {
  this.db.collection('inventarios').doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

}
update (id, imagenLink) {
  let refUser = this.db.collection('inventarios').doc(id)
  console.log(`Post => ${id}, se actualiza imangenlink`)

  refUser.update({
    cantidad: imagenLink
  })
}





get_input_output(){
  return this.db.collection('inputoutput2').snapshotChanges().pipe(map(rooms => {
    return rooms.map(a =>{
      const data = a.payload.doc.data();
      
      return data;
    })
  }))
}
get_inputoutput(){
  return this.db.collection('inputoutput').snapshotChanges().pipe(map(rooms => {
    return rooms.map(a =>{
      const data = a.payload.doc.data();
      
      return data;
    })
  }))
}






anadeinput(id, x, tinput){

 /* let ref = this.db.collection('inputoutput').doc('input').get().pipe(map(rooms => {
    ref2= rooms.data()
  }));*/
  
  // let totaloutput = ref2.totaloutput;
  
  let newtinput = tinput +1; 
  let nombreentrada = "input" + tinput;
  this.db.collection('inputoutput').doc(nombreentrada).set({
    input : x,
    docid : id,
    ne: nombreentrada,
    tipo: "input"
  })
  this.db.collection('inputoutput2').doc('input').set({
    input: newtinput
  })
}
anadeoutput(id, x, toutput){
  
 // let totalinput = ref2.totalinput;
 let newtinput = toutput + 1; 
 let nombreentrada = "output" + toutput;
 this.db.collection('inputoutput').doc(nombreentrada).set({
   input : x,
   docid : id, 
   ne: nombreentrada,
   tipo: "output"
 })
 this.db.collection('inputoutput2').doc('output').set({
   output: newtinput
 })
}

 consultaInvetarios(emailUser){
  return this.db.collection('inventarios', ref => ref.where('autor',"==", emailUser).limit(3)).snapshotChanges().pipe(map(rooms => {
    return rooms.map(a =>{
      const data = a.payload.doc.data();
      
      return data;
    })
  }))

 }
 consultaTodosInvetarios(emailUser){
  return this.db.collection('inventarios', ref => ref.where('autor',"==", emailUser)).snapshotChanges().pipe(map(rooms => {
    return rooms.map(a =>{
      const data = a.payload.doc.data();
   
      return data;
    })
  }))

 }

 
}


