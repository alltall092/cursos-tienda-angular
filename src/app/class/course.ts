enum NivelEnum {
    Principiante = "Principiante",
    Intermedio = "Intermedio",
    Avanzado = "Avanzado"
  }
  
  // Define la clase Course con sus propiedades
   export class Course {
    
    constructor(
      public id:number,
      public titulo: string,
      public contenido: string,
      public autor_instructor: string,
     public duracion: string,
    public nivel: NivelEnum,
    public categoria: string,
   public price: number,
   public url: string,
   public courseId:number){} 
      
   }