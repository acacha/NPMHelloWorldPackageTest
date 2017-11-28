function sayhelloprivate(){
    return 'Hello world ' . arguments[0];
}

exports.say = function() {
    console.log(sayhelloprivate('Sergi'));
}

// ENCAPSULAMENT relacions amb l'exterior
// Amagar estat intern dels objectes
// Per canviar estat (propietats) obliguem utilitzar
// functions
// SETTER/GETTER => Jo fugire -> Expresius

// DISSENYAR MILLOR CODI
// Evitar Code Coupling => ACOBLAMENT
//
// Dependre de especificacions/interficies i no d'implementacions
// ENCAPSULAR ->
// 1) Amagar implementació
// 2) Definir la interfície -> API Pública