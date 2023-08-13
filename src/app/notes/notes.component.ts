import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  isUpdate:boolean=false;
  isManage:boolean=false;
  currName:string='';
  currURL:string='';
  currIndex:number=-1;
  currItem:{}={};
  notesContainer:any[];
  note:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    desc:new FormControl(null,[Validators.required])
  })
  constructor() {
    if(localStorage.getItem('notes')!=null){
      let c :any=localStorage.getItem('notes');
      this.notesContainer= JSON.parse(c)
    }else{
      this.notesContainer=[];
    }
  }

  ngOnInit(): void {
  }
  addingNew(formInfo:FormGroup){
    console.log(formInfo.value);
    this.notesContainer.push(formInfo.value);
    localStorage.setItem('notes',JSON.stringify(this.notesContainer))
    setTimeout(()=>{
        this.changeStatus();
    },0)
  }
  addingChange(formInfo:FormGroup){
    console.log(formInfo.value);
    this.notesContainer.push(formInfo.value);
    localStorage.setItem('notes',JSON.stringify(this.notesContainer))
    setTimeout(()=>{
        this.manage();
    },0)
  }
  changeStatus(){
    this.isUpdate=!this.isUpdate;
    console.log(this.isUpdate)
  }
  manage(){
    this.isManage=!this.isManage;
    console.log(this.isManage)
  }
  currUpdate(currInfo:any){
    console.log(currInfo);
    this.currItem=currInfo;
    this.currName=currInfo.name;
    this.currURL=currInfo.desc;
  }
  delete(){
    let x= this.notesContainer.indexOf(this.currItem);
    this.notesContainer.splice(x,1);
    localStorage.setItem('notes',JSON.stringify(this.notesContainer));
    setTimeout(()=>{
      this.defult();
  },0)
  }
  defult(){
     this.currIndex=-1;
      this.currItem='';
      this.currName='';
      this.currURL='';
  }
}
