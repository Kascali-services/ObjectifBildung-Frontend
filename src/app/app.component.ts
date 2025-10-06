import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterBarComponent} from './shared/components/footer-bar/footer-bar.component';
import {NavbarComponent} from './shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterBarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'objectif-bildung';
}
