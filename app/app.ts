import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from "./user/user";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('AuthECClient');
}
