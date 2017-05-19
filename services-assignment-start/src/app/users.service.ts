import { EventEmitter } from '@angular/core';
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    userSetToActive= new EventEmitter<number>();
    userSetToInactive= new EventEmitter<number>();
}