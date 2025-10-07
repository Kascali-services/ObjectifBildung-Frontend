import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User, UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-me-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './me-page.component.html',
  styleUrls: ['./me-page.component.scss']
})
export class MePageComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // 🔹 Souscription aux données utilisateur
    this.userService.getUser().subscribe((data) => {
      this.user = data;
    });
  }
}
