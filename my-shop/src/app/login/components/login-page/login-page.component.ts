import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/core/services/cart.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private router: Router) { }

  /**
   * Sends a login request to the service, if truthy it sends to the
   * cart service the current user for cart switching and navigates
   * to home component. else resets the form and alerts a message.
   */
  logIn(): void {
    if (this.userService.logIn(this.username, this.password)) {
      this.cartService.setCurrentUserCart(this.username);
      this.router.navigate(['/home']);
    } else {
      alert('incorrect username or password');
    }
  }

  ngOnInit() {
  }

}
