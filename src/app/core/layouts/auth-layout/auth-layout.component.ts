import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,FormsModule, DropdownModule, ButtonModule, RouterLink],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent implements OnInit {
  languages: any[] = [];
  selectedLang = "English"
  ngOnInit(): void {
    this.languages = [
      { name: "english", code: "en" },
      { name: "arabic", code: "ar" }
    ];
  }
}
