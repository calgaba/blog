import { Component } from '@angular/core';
import { BlogListComponent } from "../components/blog-list/blog-list";
import { BlogFormComponent } from "../components/blog-form/blog-form";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogListComponent, BlogFormComponent],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class BlogComponent {
  postsList: BlogPost[] = [
    {
      title: 'Árbol al atardecer',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      content: 'En medio de un paisaje sereno, un árbol solitario se alza contra un cielo intensamente anaranjado mientras cae la tarde. Esta imagen, capturada en el instante preciso, se ha vuelto viral entre los amantes de la fotografía paisajística por su composición equilibrada y la sensación de paz que transmite. Expertos en fotografía aseguran que se trata de un ejemplo perfecto del uso natural de la luz para crear contraste y profundidad sin necesidad de retoques digitales. Sin duda, una escena que invita a la contemplación y al silencio.',
      date: '2025-07-02'
    },
    {
      title: 'Hamburguesa apetitosa',
      image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/chives-1238246_1280.jpg',
      content: 'La imagen de una jugosa hamburguesa ha captado la atención de los fanáticos del buen comer. Con queso derretido, vegetales frescos y un pan artesanal tostado a la perfección, este platillo se ha convertido en símbolo del "comfort food" moderno. Restauradores afirman que, más allá del sabor, hoy el atractivo visual es clave para atraer comensales, especialmente en redes sociales. Esta fotografía es un claro ejemplo de cómo la comida bien presentada puede despertar el apetito con solo una mirada.',
      date: '2025-07-10'
    },
    {
      title: 'Campo de flores',
      image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
      content: 'Un camino rural, flanqueado por hileras de árboles y flores en plena floración, ha enamorado a miles de usuarios en internet. El escenario, que parece sacado de una postal primaveral, es parte de una ruta poco conocida pero cada vez más visitada por turistas que buscan reconectar con la naturaleza. Las tonalidades suaves y la atmósfera tranquila del lugar lo convierten en una opción perfecta para paseos relajantes, sesiones fotográficas o simplemente escapar del bullicio urbano. Autoridades locales ya están trabajando en medidas para preservar este entorno natural.',
      date: '2025-07-06'
    }


  ];


  onNewPost(post: BlogPost) {
    this.postsList = [post, ...this.postsList]; // crea una nueva copia para que Angular detecte el cambio
  }
}
