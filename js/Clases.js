class Usuario {
    constructor(nombre, edad, email, active = false){
        this.nombre = nombre,
        this.edad = edad,
        this.email = email,
        this.active = active;
    }
    saludar(){
        console.log(`Hola, Bienvenido ${this.nombre}`);
    }
    enviarEmail(){
        console.log(`Se enviará un email a Josep32@gmail.com`);
    }
};

function Usuario2(name, age){
    this.name = name;
    this.age = age;
    this.saludarFunction = () => {
        console.log(`Hola, bienvenido ${this.name}`);
    }
};

const userForFunction = new Usuario2("John", 57);
console.log(userForFunction);

class Empleado extends Usuario {
    constructor(nombre, edad, email, active, sueldo){
        super(nombre, edad, email, active);
        this.sueldo = sueldo;
    }
    calcularSueldo(diastrabajados){
        return this.sueldo * diastrabajados;
    }
};

const UserClass1 = new Usuario("José Pérez", 32, "Josep32@gmail.com", true);
const UserClass2 = new Usuario("Augusto", 26, "Augusto65@gmail.com", true);

const empleado1 = new Empleado("Julian", 19, "Julianomanchi32@gmail.com", true, "9000");

console.log(UserClass1);


//
const user1 = {
    nombre: "José Pérez",
    edad: 32,
    email: "Josep35@gmail.com",
    active: true,
    saludar(){
        console.log("Hola, bienvenido José Pérez");
    }
};