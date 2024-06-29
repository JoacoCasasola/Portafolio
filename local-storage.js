
export function leer(clave) {
    return JSON.parse(localStorage.getItem(clave));
}
  
export function escribir(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}
  
export function limpiar(clave) {
    localStorage.removeItem(clave);
}
  
export function jsonToObject(jsonString) {
    return JSON.parse(jsonString);
}
  
export function objectToJson(objeto) {
    return JSON.stringify(objeto);
}
