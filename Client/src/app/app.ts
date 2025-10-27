import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "./layout/nav/nav";
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, ConfirmDialog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);

}
