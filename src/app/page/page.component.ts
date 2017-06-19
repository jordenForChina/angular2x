import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  // 思路 如果 页数大于
  pageNum:number = 10;
  currentPage:number;
  pageList:any = [];
  constructor() { }

  ngOnInit() {
    this.defaultArray();
  }
  defaultArray(){
    let arr = [];
    for(var i=1;i<this.pageNum;i++){
      console.debug(i);
      arr.push(i);
    };
    this.pageList = arr;
    console.debug(arr,this.pageList)
  }
  
}
