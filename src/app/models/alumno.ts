export class Alumno {
    constructor(
        public idAlumno:Number,
        public dniAlumno:Number,
        public nombreAlumno:string,
        public apellidoAlumno:string,
        public direccionAlumno:string,
        public emailAlumno:string,
        public fechaNacAlumno: Date,
        public estado: Number,
        public telAlumno:Number
    ){
        
    }
}