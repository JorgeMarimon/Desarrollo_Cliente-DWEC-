export class Alumno {
    public email: string;
    constructor(
        public nombre: string | undefined,
        public apellido: string | undefined,
        public edad: number,
        public notas: number[],
        public activo: boolean,
        public linkedin: string,
        public diasFaltas: number
    ) {
        // Genera automáticamente el correo electrónico al instanciar un alumno
        this.email = this.generarEmail();
    }

    private generarEmail(): string {
        return this.nombre?.toLocaleLowerCase() + "_" + this.apellido?.toLocaleLowerCase() + "@alu.medac.es"
    }
    
}
