import { Directive ,ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor(private el:ElementRef) { };

  // 更换颜色
  hightLight(color){
    this.el.nativeElement.style.color = color;
  }
  // 监听
  @HostListener('mouseenter') onMouseEnter(){
    this.hightLight('purple');
  };

  @HostListener('mouseleave') onMouseLeave(){
    this.hightLight('red');
  }

 @HostListener('click') onClick(){
   this.hightLight('white')
 }
}
