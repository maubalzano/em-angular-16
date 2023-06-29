import { Directive, ElementRef, HostBinding } from "@angular/core";
import { Subscription } from "rxjs";

@Directive({
    selector: '[changeDetection]'
  })
  export class ChangeDetectionDirective {

    @HostBinding('class.border-danger') get checked() {return this.hasBeenChecked};
    
    private hasBeenChecked = false;
    private subscription?: Subscription;

    constructor(private el: ElementRef) {}

    public changesDetected(componentName: string) {
        console.log('Change Detection run on', componentName);
        const children = this.el.nativeElement.children;
        const firstChildren = Array.from(children)
    
        // Add a border to each of the first children elements
        firstChildren.forEach((child: any) => {
            child.style.transition = '.3s'
            child.style.boxShadow = '0px 0px 3px 1px blue'
        //   child.classList.toggle('border-danger');
          setTimeout(() => {child.style.boxShadow = ''}, 400)
        });

    }

  }