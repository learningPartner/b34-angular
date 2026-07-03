import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLight implements AfterViewInit{

  @Input() colorValue: string = '';

  constructor(private elementRef: ElementRef) {
    console.log("HighLight executed")
    debugger;
  }

  ngAfterViewInit(): void {
    const elemnetText =  this.elementRef.nativeElement.innerText;
    console.log('Element text' +  elemnetText);
  }

  @HostListener('mouseenter')
  onMouseOver() {
    debugger;
    //this.elementRef.nativeElement.style.color = "red";
     this.elementRef.nativeElement.style.color = this.colorValue;
    console.log("Mouser Over on Elelent")
  }

  @HostListener("mouseleave")
  onMouseLeft() {
    this.elementRef.nativeElement.style.color = 'black';
  }
}
