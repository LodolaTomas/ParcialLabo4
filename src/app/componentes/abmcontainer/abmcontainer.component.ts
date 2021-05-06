import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abmcontainer',
  templateUrl: './abmcontainer.component.html',
  styleUrls: ['./abmcontainer.component.css']
})
export class ABMContainerComponent implements OnInit {
  token:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token != 'admind@admin.com') {
      this.router.navigateByUrl("login");
    }
  }

}
