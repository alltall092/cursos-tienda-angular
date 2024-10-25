
enum NivelEnum {
    Principiante = "Principiante",
    Intermedio = "Intermedio",
    Avanzado = "Avanzado"
  }


export class Cart{
    

   
constructor(
  public id:number,
    public titulo: string,
    public descripcion: string,
    public autor_instructor: string,
   public duracion: string,
  public nivel: NivelEnum,
  public categoria: string,
 public price: number,
 public url: string,
 public userId:number,
public quantity:number,
 public courseId:number, 
 ){

}
}


