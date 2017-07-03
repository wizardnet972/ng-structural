import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/Observable/of';

class User {
    constructor(
        public name: string,
        public role: string
    ) { }
}

@Injectable()
export class AuthService {
    user: BehaviorSubject<User>;

    constructor() {
        this.user = new BehaviorSubject(
            new User('wizardnet', 'admin')
        );
    }

    setRole(role) {
        const updateUser = Object.assign(this.user.value, { role: role });
        this.user.next(updateUser);
        return this.user.asObservable();
    }
}
