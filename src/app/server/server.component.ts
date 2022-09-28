import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Property } from '../property.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  property:Property[]=[]

  constructor(private mainService:MainService) {
    this.mainService.getData().subscribe(res=>{
      this.property= res
    })
   }

  ngOnInit(): void {
  }
  remove(id:number, i:number){
    this.mainService.delete(id).subscribe(res=>{console.log(res);
      this.property.splice(i)
  })
  }


}
