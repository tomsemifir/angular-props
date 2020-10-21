import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter<User>();
  
  userForm : FormGroup;
  user : User;

  constructor(private fb : FormBuilder) {
    this.userForm = this.fb.group({
      id : [''],
      nom : [''],
      prenom : ['']
    })
   }

  ngOnInit(): void {
  }

  addUser(user: User) {
    this.user = user;
    this.newUserEvent.emit(user);
  }

}
