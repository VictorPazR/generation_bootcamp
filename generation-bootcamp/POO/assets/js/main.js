class Persona{
    nombre="";
    edad=null;
    correo="";

    constructor(nombre,edad,correo){
        this.nombre=nombre;
        this.edad=edad;
        this.correo = correo;

    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    get getCorreo(){
        return this.correo;
    }
    set setCorreo(correo){
        this.correo = correo;
    }
    saludar(){
        let mensaje= 
    }
}

const persona1 = new Persona("Juan",25,"@ihihc");
const persona2 = new Persona("Gabriel",47,"ahfisfai");


persona1.setNombre='Jose';



