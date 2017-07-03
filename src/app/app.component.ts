import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>myNgIf!</h1>
    
    <div *myNgIf="current">
      {{current.name}}
    </div>
    <ng-template [myNgIf]="current">
      <div>{{current.name}}</div>
    </ng-template>

    <button (click)="toggle()">Toggle!</button>
    <hr>

    <div *ifRole="'admin'">You are Admin!</div>
    <div *ifRole="'user'">You are User!</div>
    <div *ifRole="'unknown'">You are Unknown!</div>
    <button (click)="admin()">Admin</button>
    <button (click)="user()">User</button>
    <button (click)="unknown()">Unknown</button>
    <hr>
    <h2>Your Age</h2>
    <select>
      <ng-container *range="[18,80] let num">
        <option [ngValue]="num">{{num}}</option>
      </ng-container>
    </select>
  `
})
export class AppComponent {
  person = { name: 'wizardnet972' };
  current = this.person;

  constructor(
    private authService: AuthService) { }

  toggle() {
    this.current = this.current ? null : this.person;
  }

  admin() {
    this.authService.setRole('admin');
  }

  user() {
    this.authService.setRole('user');
  }

  unknown() {
    this.authService.setRole('unknown');
  }
}
