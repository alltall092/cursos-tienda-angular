import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './class/course';

@Pipe({
  name: 'buscador',
  standalone: true
})
export class BuscadorPipe implements PipeTransform {

  transform(course:Course[], search:string): Course[]{
    const buscador=course.filter(x=>x.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    return buscador;
  }

}
