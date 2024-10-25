import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,WhatsappComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
