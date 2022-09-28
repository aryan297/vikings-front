import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";
import { MainService } from '../main.service';
import { Property } from '../property.interface';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit {
  Form:FormGroup 
  property:Property[]=[]

  constructor(private fb:FormBuilder, private mainService:MainService) {
    this.Form=this.fb.group({   // Reactive Forms used 
      name: [''],
      description:[''],
      size:['']

    })
   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.Form.value);
    this.property.push(this.Form.value)
    this.mainService.postData(this.Form.value).subscribe(res=>{
      console.log(res);
    }) //save in server for part2
    
  }
  remove(i:number){
    this.property.splice(i)
  }

}
