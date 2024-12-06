import { Component, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-auth-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-auth-btn.component.html',
  styleUrl: './main-auth-btn.component.scss'
})
export class MainAuthBtnComponent {
@Input() text:string = "";
}
