import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  isUpdate:boolean=false;
  isManage:boolean=false;
  currName:string='';
  currURL:string='';
  currIndex:number=-1;

  currItem:{}={};
  linksContainer:any[];
  link:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    url:new FormControl(null,[Validators.required])
  })
  constructor() {

    if(localStorage.getItem('links')!=null){
      let c :any=localStorage.getItem('links');
      this.linksContainer= JSON.parse(c)
    }else{
      this.linksContainer=[];
    }
  }

  ngOnInit(): void {
  }
  addingNew(formInfo:FormGroup){
    console.log(formInfo.value);
    this.linksContainer.push(formInfo.value);
    localStorage.setItem('links',JSON.stringify(this.linksContainer))
    setTimeout(()=>{
        this.changeStatus();
    },0)
  }
  addingChange(formInfo:FormGroup){
    console.log(formInfo.value);
    this.linksContainer[this.currIndex]=formInfo.value;
    // this.linksContainer.push(formInfo.value);
    localStorage.setItem('links',JSON.stringify(this.linksContainer))
    this.defult()
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
  currUpdate(currInfo:any,index:number){
    console.log(currInfo,index);
    this.currIndex=index;
    this.currItem=currInfo;
    this.currName=currInfo.name;
    this.currURL=currInfo.url;
  }
  delete(){
    let x= this.linksContainer.indexOf(this.currItem);
    this.linksContainer.splice(x,1);
    localStorage.setItem('links',JSON.stringify(this.linksContainer));
    this.defult()
  }
  defult(){
    this.currIndex=-1;
     this.currItem='';
     this.currName='';
     this.currURL='';
 }
}

