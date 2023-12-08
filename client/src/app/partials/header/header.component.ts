import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class HeaderComponent {
  displayName: string | null = null;
}