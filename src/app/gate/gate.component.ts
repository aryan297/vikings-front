import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  partOne(){
    this.route.navigate(['/offline'])

  }
  partTwo(){
    this.route.navigate(['/server'])
  }
}
