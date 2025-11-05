
import * as file from '../assets/dades/dades.json' with { type: "json" };
const dades = file.default.equips;//dades és un array d'equips, ara

// A partir d'un nom d'un equip ('Valencia', 'Levante', 'Barcelona', ... ), 
// obtinc l'objecte d'eixe equip amb totes seues dades.
const getObjEquip = (nomEquip) => {
  return dades.filter((elem) => elem.strTeam === nomEquip)[0];
}

//a partir d'un obj amb les dades d'un equip, obtinc la imatge (strTeamShort+"png")
const getUrlImatgeEscut = (unEquipObj) => {
    //implementeu-ho
    return unEquipObj.strBadge
}
const getIntStadiumCapacity = (unEquipObj) => {
    return unEquipObj.intStadiumCapacity
}

//obtinc l'any de fundació (intFormedYear)
const getAnyFundacio = (unEquipObj) => {
    //implementeu-ho
    return unEquipObj.intFormedYear
    
}

//obtinc l'any de fundació (intFormedYear)
const getNomEstadi = (unEquipObj) => {
    //implementeu-ho
    return unEquipObj.strStadium
}

//obtinc el nom de l'equip (strTeam)
const getNomEquip = (unEquipObj) => {
    //implementeu-ho
    return unEquipObj.strTeam
}

//obtinc la fitxa de l'equip.
//La fitxa consisteix en un objecte amb els atributs: nom,imatgeEscut,anyFundacio,estadi
const getFitxaEquip = (unEquipObj) => {
  return {
    nom: unEquipObj.strTeam,
    imatgeEscut: unEquipObj.strBadge,
    anyFundacio: unEquipObj.intFormedYear,
    estadi: unEquipObj.strStadium
  };
};


const equipACercar = 'Girona';


console.log(getObjEquip(equipACercar));

export { getObjEquip, getFitxaEquip, getNomEstadi, getIntStadiumCapacity};
