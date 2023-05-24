import { Component, OnInit } from '@angular/core';

class User {
  firstname: string;
  lastname: string;
  age: number;
  quote: string;
  imgProfile: string;
  ageVisible: boolean = false;

  constructor(firstname : string, lastname : string, age : number, quote : string, imgProfile : string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.quote = quote;
    this.imgProfile = imgProfile;
  }

  sayHello() : void {
    alert("Hello ! 💥💥💥");
  }

  isAgeVisible() : void {
    this.ageVisible = !this.ageVisible;
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user : User;

  constructor() {
    this.user = new User("Baptiste", "Bertin", 23, "That's my shit !", "../../assets/images/Polaris_Star_RGB_BLK.png");
  }

  ngOnInit() : void {

  }
}