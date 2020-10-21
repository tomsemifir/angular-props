import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm : FormGroup;
  user : User;

  constructor(private fb : FormBuilder, private userService : UserService) {
    this.userForm = this.fb.group({
      id : [''],
      nom : [''],
      prenom : ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.user = this.userForm.value;
    this.userService.create(this.user).subscribe();
  }

}
