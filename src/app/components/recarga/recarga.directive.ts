import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRecarga]'
})
export class RecargaDirective implements OnChanges {

  @Input() recarga: boolean = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    this.viewContainerRef.createEmbeddedView(templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recarga']) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
