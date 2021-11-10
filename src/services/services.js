

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  orderBy,
  limit,
  updateDoc,
  addDoc,

} from "firebase/firestore";
import { db } from "./firebase";

const listaCursos = "curso";
const listaTemarios = "temario";
const listaInscripciones = "inscripcion";
const estudiante = "estudiante";
export const apiSettings = {
  getCursos: async () => {
    const datos = await getDocs(collection(db, listaCursos));
    let datosJson = [];
    datos.forEach((doc) => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
    return await datosJson;
  },
  getCurso: async (idCurso) => {
    const curso = await getDoc(doc(db, listaCursos, idCurso));
    return [curso.id, curso.data()];
  },

  getTemario: async (idCurso) => {
    const q = query(
      collection(db, listaTemarios),
      where("codCurso", "==", `${idCurso}`)
    );
    const querySnapshot = await getDocs(q);
    let temarioJson = [];
    querySnapshot.forEach((doc) => {
      temarioJson.push([doc.id, doc.data()]);
    });

    if (temarioJson === []) {
      temarioJson = [{}];
    }
    console.log(temarioJson);
    return await temarioJson;
  },

  getTopCursos: async () => {
    const q = query(
      collection(db, listaCursos),
      orderBy("cantInscritos", "desc"),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    let datosJson = [];
    querySnapshot.forEach((doc) => {
      datosJson.push([doc.id, doc.data()]);
    });
    if (datosJson === []) {
      datosJson = [{}];
    }
   
    return await datosJson;
  },

   getNombre: async (iduser) => {
    const q = query(
      collection(db, estudiante),
      where("correo", "==", `${iduser}`)

      
    );
    const querySnapshot = await getDocs(q);
    let datosEst = [];
    querySnapshot.forEach((doc) => {
      datosEst.push([doc.id, doc.data()]);
    });

    if (datosEst === []) {
      datosEst = [{}];
    }
    console.log(datosEst);
    return await datosEst;
  },

  getName: async (userId) => {
    const user = await getDoc(doc(db, estudiante, userId));
    console.log(user);
    return [user.id, user.data()];
  
  },

  postInscripcion: async (idCurso, idEst) => {
    const docRef = await addDoc(collection(db, listaInscripciones), {
      codCurso: idCurso,
      codEst: idEst,
      estadoInscripcion: 1,
    });
    console.log("Document written with ID: ", docRef.id);
  },

  putCurso: async (idCurso) => {
    const docRef = doc(db, listaCursos, idCurso);
    const curso = await getDoc(docRef);
    const cant = curso.data().cantInscritos + 1;
    await updateDoc(docRef, {
      cantInscritos: cant,
    });
  },
};
