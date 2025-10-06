import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterBarComponent} from './shared/components/footer-bar/footer-bar.component';
import {NavbarComponent} from './shared/components/nav-bar/nav-bar.component';
import {LonginPageComponent} from './pages/auth-pages/longin-page/longin-page.component';
import {AuthService} from './core/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterBarComponent, NavbarComponent, LonginPageComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'objectif-bildung';
  isLogged = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getLoginStatus().subscribe(status => {
      this.isLogged = status;
    });
  }
}
