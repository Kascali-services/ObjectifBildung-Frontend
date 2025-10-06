import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {FooterBarComponent} from './shared/components/footer-bar/footer-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'objectif-bildung';
}
