import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
 // 思路 如果 页数大于
  pageNum:number = 7;
  currentPage:number;
  pageList:any = [];
  constructor() { }
  @Input() pageTotal:number;
  ngOnInit() {
    this.defaultArray();
  }
  defaultArray(){
    let arr = [];
    if(this.pageTotal>7){
      for(var i=1;i<=this.pageTotal;i++){
        arr.push(i);
        
      };
    }else{
       for(var i=1;i<=this.pageTotal;i++){
        console.debug(i);
        arr.push(i);
      };     
    }
    this.pageList = arr;
     console.debug(arr,this.pageList)
    
  }
  
}
