/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../build/components/footer/footer.component';
import * as import3 from './pager.component.ngfactory';
import * as import4 from '../../../../build/components/footer/pager.component';
const styles_DataTableFooterComponent:any[] = ([] as any[]);
export const RenderType_DataTableFooterComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableFooterComponent,
  data: {}
}
);
function View_DataTableFooterComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n          ',
      ' ',
      ' / \n        '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.selectedCount.toLocaleString();
    const currVal_1:any = co.selectedMessage;
    ck(v,1,0,currVal_0,currVal_1);
  });
}
export function View_DataTableFooterComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(2,[
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),[[
        4,
        'height',
        'px'
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpod(['selected-count']),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'page-count'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableFooterComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '\n\n        ',
      ' ',
      '\n      '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'datatable-pager',[[
        'class',
        'datatable-pager'
      ]
      ],[[
        8,
        'hidden',
        0
      ]
      ],[[
        (null as any),
        'change'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.DataTableFooterComponent = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>co.page.emit($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import3.View_DataTablePagerComponent_0,import3.RenderType_DataTablePagerComponent)),
    import0.ɵdid(24576,(null as any),0,import4.DataTablePagerComponent,([] as any[]),{
      pagerLeftArrowIcon: [
        0,
        'pagerLeftArrowIcon'
      ]
      ,
      pagerRightArrowIcon: [
        1,
        'pagerRightArrowIcon'
      ]
      ,
      pagerPreviousIcon: [
        2,
        'pagerPreviousIcon'
      ]
      ,
      pagerNextIcon: [
        3,
        'pagerNextIcon'
      ]
      ,
      size: [
        4,
        'size'
      ]
      ,
      count: [
        5,
        'count'
      ]
      ,
      page: [
        6,
        'page'
      ]

    }
    ,{change: 'change'}),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import2.DataTableFooterComponent = v.component;
    const currVal_1:any = ck(v,3,0,co.selectedMessage);
    ck(v,2,0,currVal_1);
    const currVal_2:any = co.selectedMessage;
    ck(v,8,0,currVal_2);
    const currVal_6:any = co.pagerLeftArrowIcon;
    const currVal_7:any = co.pagerRightArrowIcon;
    const currVal_8:any = co.pagerPreviousIcon;
    const currVal_9:any = co.pagerNextIcon;
    const currVal_10:any = co.pageSize;
    const currVal_11:any = co.rowCount;
    const currVal_12:any = co.curPage;
    ck(v,12,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
  },(ck,v) => {
    var co:import2.DataTableFooterComponent = v.component;
    const currVal_0:any = co.footerHeight;
    ck(v,1,0,currVal_0);
    const currVal_3:any = co.rowCount.toLocaleString();
    const currVal_4:any = co.totalMessage;
    ck(v,9,0,currVal_3,currVal_4);
    const currVal_5:boolean = !co.isVisible;
    ck(v,11,0,currVal_5);
  });
}
function View_DataTableFooterComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'datatable-footer',[[
        'class',
        'datatable-footer'
      ]
    ],(null as any),(null as any),(null as any),View_DataTableFooterComponent_0,RenderType_DataTableFooterComponent)),
    import0.ɵdid(24576,(null as any),0,import2.DataTableFooterComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const DataTableFooterComponentNgFactory:import0.ComponentFactory<import2.DataTableFooterComponent> = import0.ɵccf('datatable-footer',import2.DataTableFooterComponent,View_DataTableFooterComponent_Host_0,{
  footerHeight: 'footerHeight',
  rowCount: 'rowCount',
  pageSize: 'pageSize',
  offset: 'offset',
  pagerLeftArrowIcon: 'pagerLeftArrowIcon',
  pagerRightArrowIcon: 'pagerRightArrowIcon',
  pagerPreviousIcon: 'pagerPreviousIcon',
  pagerNextIcon: 'pagerNextIcon',
  totalMessage: 'totalMessage',
  selectedCount: 'selectedCount',
  selectedMessage: 'selectedMessage'
}
,{page: 'page'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGFpYmVydGRpZWdvL0Rlc2t0b3Avbmd4L25neC1kYXRhdGFibGUvYnVpbGQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMuRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMuRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3RlZC1jb3VudCc6IHNlbGVjdGVkTWVzc2FnZX1cIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJmb290ZXJIZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvdW50XCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2VsZWN0ZWRNZXNzYWdlXCI+XG4gICAgICAgICAge3tzZWxlY3RlZENvdW50LnRvTG9jYWxlU3RyaW5nKCl9fSB7e3NlbGVjdGVkTWVzc2FnZX19IC8gXG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICB7e3Jvd0NvdW50LnRvTG9jYWxlU3RyaW5nKCl9fSB7e3RvdGFsTWVzc2FnZX19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkYXRhdGFibGUtcGFnZXJcbiAgICAgICAgW3BhZ2VyTGVmdEFycm93SWNvbl09XCJwYWdlckxlZnRBcnJvd0ljb25cIlxuICAgICAgICBbcGFnZXJSaWdodEFycm93SWNvbl09XCJwYWdlclJpZ2h0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUHJldmlvdXNJY29uXT1cInBhZ2VyUHJldmlvdXNJY29uXCJcbiAgICAgICAgW3BhZ2VyTmV4dEljb25dPVwicGFnZXJOZXh0SWNvblwiXG4gICAgICAgIFtwYWdlXT1cImN1clBhZ2VcIlxuICAgICAgICBbc2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgIFtjb3VudF09XCJyb3dDb3VudFwiXG4gICAgICAgIFtoaWRkZW5dPVwiIWlzVmlzaWJsZVwiXG4gICAgICAgIChjaGFuZ2UpPVwicGFnZS5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvZGF0YXRhYmxlLXBhZ2VyPlxuICAgIDwvZGl2PlxuICAiLCI8ZGF0YXRhYmxlLWZvb3Rlcj48L2RhdGF0YWJsZS1mb290ZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tRO0lBQThCO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7SUFBQTs7Ozs7SUFMdEM7TUFDSTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUNFO0lBQ2lDO01BQ2pDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDdEI7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVPO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUdIO01BQ047UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFTRTtRQUFBO1FBQUE7TUFBQTtNQVRGO0lBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBUytCO0lBQ2I7SUFDZDs7OztJQXBCSjtJQURGLFNBQ0UsU0FERjtJQUlVO0lBQU4sU0FBTSxTQUFOO0lBT0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBRkE7SUFMRixVQUNFLFVBQ0EsVUFDQSxVQUNBLFVBRUEsV0FDQSxXQUZBLFVBTEY7OztJQVJBO0lBRkYsU0FFRSxTQUZGO0lBTVc7SUFBQTtJQUFBO0lBWVA7SUFSRixVQVFFLFNBUkY7Ozs7O01DWE47UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
