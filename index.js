function constructor(obj,anun,azganun,taretiv){
     
   obj.anun = anun;
   obj.azganun = azganun;
   obj.taretiv = taretiv;
   return obj;
}
function Add(obj){
    obj.varordakanPorc = 2023 - obj.taretiv;
    return obj;
}

let anun = prompt("greq dzer anuny");
let azganun = prompt("greq dzer azganuny");
let taretiv = +prompt("greq varordakan iravunqi stacman taretivy");

let obj1 = {};
constructor(obj1,anun,azganun,taretiv);
let obj = Add(obj1);
 