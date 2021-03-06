/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './header-cell.component.ngfactory';
import * as import2 from '../../../../build/directives/draggable.directive';
import * as import3 from '../../../../build/directives/resizeable.directive';
import * as import4 from '../../../../build/directives/long-press.directive';
import * as import5 from '../../../../build/components/header/header-cell.component';
import * as import6 from '@angular/common';
import * as import7 from '../../../../build/components/header/header.component';
import * as import8 from '../../../../build/directives/orderable.directive';
import * as import9 from '@angular/platform-browser';
const styles_DataTableHeaderComponent:any[] = ([] as any[]);
export const RenderType_DataTableHeaderComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableHeaderComponent,
  data: {}
}
);
function View_DataTableHeaderComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'datatable-header-cell',[
      [
        'draggable',
        ''
      ]
      ,
      [
        'long-press',
        ''
      ]
      ,
      [
        'resizeable',
        ''
      ]

    ]
    ,[
      [
        2,
        'resizeable',
        (null as any)
      ]
      ,
      [
        2,
        'press',
        (null as any)
      ]
      ,
      [
        2,
        'longpress',
        (null as any)
      ]
      ,
      [
        4,
        'height',
        'px'
      ]
      ,
      [
        8,
        'className',
        0
      ]
      ,
      [
        1,
        'title',
        0
      ]
      ,
      [
        4,
        'minWidth',
        'px'
      ]
      ,
      [
        4,
        'maxWidth',
        'px'
      ]
      ,
      [
        4,
        'width',
        'px'
      ]

    ]
    ,[
      [
        (null as any),
        'resize'
      ]
      ,
      [
        (null as any),
        'longPressStart'
      ]
      ,
      [
        (null as any),
        'longPressEnd'
      ]
      ,
      [
        (null as any),
        'sort'
      ]
      ,
      [
        (null as any),
        'select'
      ]
      ,
      [
        (null as any),
        'mousedown'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('mousedown' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2).onMousedown($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('mousedown' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,3).onMouseDown($event)) !== false);
        ad = (pd_1 && ad);
      }
      if (('resize' === en)) {
        const pd_2:any = ((<any>co.onColumnResized($event,v.context.$implicit)) !== false);
        ad = (pd_2 && ad);
      }
      if (('longPressStart' === en)) {
        const pd_3:any = ((<any>co.onLongPressStart($event)) !== false);
        ad = (pd_3 && ad);
      }
      if (('longPressEnd' === en)) {
        const pd_4:any = ((<any>co.onLongPressEnd($event)) !== false);
        ad = (pd_4 && ad);
      }
      if (('sort' === en)) {
        const pd_5:any = ((<any>co.onSort($event)) !== false);
        ad = (pd_5 && ad);
      }
      if (('select' === en)) {
        const pd_6:any = ((<any>co.select.emit($event)) !== false);
        ad = (pd_6 && ad);
      }
      return ad;
    },import1.View_DataTableHeaderCellComponent_0,import1.RenderType_DataTableHeaderCellComponent)),
      import0.ɵdid(335872,[[
        1,
        4
      ]
    ],0,import2.DraggableDirective,[import0.ElementRef],{
      dragEventTarget: [
        0,
        'dragEventTarget'
      ]
      ,
      dragModel: [
        1,
        'dragModel'
      ]
      ,
      dragX: [
        2,
        'dragX'
      ]
      ,
      dragY: [
        3,
        'dragY'
      ]

    }
    ,(null as any)),
      import0.ɵdid(2170880,(null as any),0,import3.ResizeableDirective,[import0.ElementRef],{resizeEnabled: [
        0,
        'resizeEnabled'
      ]
    },{resize: 'resize'}),
      import0.ɵdid(73728,(null as any),0,import4.LongPressDirective,([] as any[]),{pressModel: [
        0,
        'pressModel'
      ]
    },{
      longPressStart: 'longPressStart',
      longPressEnd: 'longPressEnd'
    }
    ),
    import0.ɵdid(24576,(null as any),0,import5.DataTableHeaderCellComponent,([] as any[]),{
      sortType: [
        0,
        'sortType'
      ]
      ,
      column: [
        1,
        'column'
      ]
      ,
      sortAscendingIcon: [
        2,
        'sortAscendingIcon'
      ]
      ,
      sortDescendingIcon: [
        3,
        'sortDescendingIcon'
      ]
      ,
      allRowsSelected: [
        4,
        'allRowsSelected'
      ]
      ,
      selectionType: [
        5,
        'selectionType'
      ]
      ,
      headerHeight: [
        6,
        'headerHeight'
      ]
      ,
      sorts: [
        7,
        'sorts'
      ]

    }
    ,{
      sort: 'sort',
      select: 'select'
    }
    ),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_9:any = co.dragEventTarget;
    const currVal_10:any = v.context.$implicit;
    const currVal_11:any = ((co.reorderable && v.context.$implicit.draggable) && v.context.$implicit.dragging);
    const currVal_12:any = false;
    ck(v,1,0,currVal_9,currVal_10,currVal_11,currVal_12);
    const currVal_13:any = v.context.$implicit.resizeable;
    ck(v,2,0,currVal_13);
    const currVal_14:any = v.context.$implicit;
    ck(v,3,0,currVal_14);
    const currVal_15:any = co.sortType;
    const currVal_16:any = v.context.$implicit;
    const currVal_17:any = co.sortAscendingIcon;
    const currVal_18:any = co.sortDescendingIcon;
    const currVal_19:any = co.allRowsSelected;
    const currVal_20:any = co.selectionType;
    const currVal_21:any = co.headerHeight;
    const currVal_22:any = co.sorts;
    ck(v,4,0,currVal_15,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,2).resizeEnabled;
    const currVal_1:any = import0.ɵnov(v,3).press;
    const currVal_2:any = import0.ɵnov(v,3).isLongPress;
    const currVal_3:any = import0.ɵnov(v,4).headerHeight;
    const currVal_4:any = import0.ɵnov(v,4).columnCssClasses;
    const currVal_5:any = import0.ɵnov(v,4).name;
    const currVal_6:any = import0.ɵnov(v,4).minWidth;
    const currVal_7:any = import0.ɵnov(v,4).maxWidth;
    const currVal_8:any = import0.ɵnov(v,4).width;
    ck(v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
  });
}
function View_DataTableHeaderComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',([] as any[]),[[
        8,
        'className',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import6.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderComponent_2)),
    import0.ɵdid(401408,(null as any),0,import6.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n      ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = co.stylesByGroup(v.context.$implicit.type);
    ck(v,1,0,currVal_1);
    const currVal_2:any = v.context.$implicit.columns;
    const currVal_3:any = co.columnTrackingFn;
    ck(v,4,0,currVal_2,currVal_3);
  },(ck,v) => {
    const currVal_0:any = ('datatable-row-' + v.context.$implicit.type);
    ck(v,0,0,currVal_0);
  });
}
export function View_DataTableHeaderComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',[
      [
        'class',
        'datatable-header-inner'
      ]
      ,
      [
        'orderable',
        ''
      ]

    ]
      ,[[
        4,
        'width',
        'px'
      ]
      ],[[
        (null as any),
        'reorder'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import7.DataTableHeaderComponent = v.component;
      if (('reorder' === en)) {
        const pd_0:any = ((<any>co.onColumnReordered($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(598016,(null as any),1,import8.OrderableDirective,[
      import0.KeyValueDiffers,
      import9.DOCUMENT
    ]
    ,(null as any),{reorder: 'reorder'}),
    import0.ɵqud(301989888,1,{draggables: 1}),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderComponent_1)),
    import0.ɵdid(401408,(null as any),0,import6.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import7.DataTableHeaderComponent = v.component;
    const currVal_1:any = co.columnsByPin;
    const currVal_2:any = co.trackByGroups;
    ck(v,6,0,currVal_1,currVal_2);
  },(ck,v) => {
    var co:import7.DataTableHeaderComponent = v.component;
    const currVal_0:any = co.columnGroupWidths.total;
    ck(v,1,0,currVal_0);
  });
}
function View_DataTableHeaderComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'datatable-header',[[
        'class',
        'datatable-header'
      ]
    ],[
      [
        4,
        'height',
        (null as any)
      ]
      ,
      [
        4,
        'width',
        (null as any)
      ]

    ]
    ,(null as any),(null as any),View_DataTableHeaderComponent_0,RenderType_DataTableHeaderComponent)),
    import0.ɵdid(24576,(null as any),0,import7.DataTableHeaderComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,1).headerHeight;
    const currVal_1:any = import0.ɵnov(v,1).headerWidth;
    ck(v,0,0,currVal_0,currVal_1);
  });
}
export const DataTableHeaderComponentNgFactory:import0.ComponentFactory<import7.DataTableHeaderComponent> = import0.ɵccf('datatable-header',import7.DataTableHeaderComponent,View_DataTableHeaderComponent_Host_0,{
  sortAscendingIcon: 'sortAscendingIcon',
  sortDescendingIcon: 'sortDescendingIcon',
  scrollbarH: 'scrollbarH',
  innerWidth: 'innerWidth',
  offsetX: 'offsetX',
  sorts: 'sorts',
  sortType: 'sortType',
  allRowsSelected: 'allRowsSelected',
  selectionType: 'selectionType',
  reorderable: 'reorderable',
  headerHeight: 'headerHeight',
  columns: 'columns'
}
,{
  sort: 'sort',
  reorder: 'reorder',
  resize: 'resize',
  select: 'select'
}
,([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGFpYmVydGRpZWdvL0Rlc2t0b3Avbmd4L25neC1kYXRhdGFibGUvYnVpbGQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMuRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9ob21lL2RhaWJlcnRkaWVnby9EZXNrdG9wL25neC9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMuRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdlxuICAgICAgb3JkZXJhYmxlXG4gICAgICAocmVvcmRlcik9XCJvbkNvbHVtblJlb3JkZXJlZCgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZS53aWR0aC5weF09XCJjb2x1bW5Hcm91cFdpZHRocy50b3RhbFwiXG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1oZWFkZXItaW5uZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbEdyb3VwIG9mIGNvbHVtbnNCeVBpbjsgdHJhY2tCeTogdHJhY2tCeUdyb3Vwc1wiXG4gICAgICAgIFtjbGFzc109XCInZGF0YXRhYmxlLXJvdy0nICsgY29sR3JvdXAudHlwZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInN0eWxlc0J5R3JvdXAoY29sR3JvdXAudHlwZSlcIj5cbiAgICAgICAgPGRhdGF0YWJsZS1oZWFkZXItY2VsbFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sR3JvdXAuY29sdW1uczsgdHJhY2tCeTogY29sdW1uVHJhY2tpbmdGblwiXG4gICAgICAgICAgcmVzaXplYWJsZVxuICAgICAgICAgIFtyZXNpemVFbmFibGVkXT1cImNvbHVtbi5yZXNpemVhYmxlXCJcbiAgICAgICAgICAocmVzaXplKT1cIm9uQ29sdW1uUmVzaXplZCgkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgICAgIGxvbmctcHJlc3NcbiAgICAgICAgICBbcHJlc3NNb2RlbF09XCJjb2x1bW5cIlxuICAgICAgICAgIChsb25nUHJlc3NTdGFydCk9XCJvbkxvbmdQcmVzc1N0YXJ0KCRldmVudClcIlxuICAgICAgICAgIChsb25nUHJlc3NFbmQpPVwib25Mb25nUHJlc3NFbmQoJGV2ZW50KVwiXG4gICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdYXT1cInJlb3JkZXJhYmxlICYmIGNvbHVtbi5kcmFnZ2FibGUgJiYgY29sdW1uLmRyYWdnaW5nXCJcbiAgICAgICAgICBbZHJhZ1ldPVwiZmFsc2VcIlxuICAgICAgICAgIFtkcmFnTW9kZWxdPVwiY29sdW1uXCJcbiAgICAgICAgICBbZHJhZ0V2ZW50VGFyZ2V0XT1cImRyYWdFdmVudFRhcmdldFwiXG4gICAgICAgICAgW2hlYWRlckhlaWdodF09XCJoZWFkZXJIZWlnaHRcIlxuICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICBbc29ydFR5cGVdPVwic29ydFR5cGVcIlxuICAgICAgICAgIFtzb3J0c109XCJzb3J0c1wiXG4gICAgICAgICAgW3NlbGVjdGlvblR5cGVdPVwic2VsZWN0aW9uVHlwZVwiXG4gICAgICAgICAgW3NvcnRBc2NlbmRpbmdJY29uXT1cInNvcnRBc2NlbmRpbmdJY29uXCJcbiAgICAgICAgICBbc29ydERlc2NlbmRpbmdJY29uXT1cInNvcnREZXNjZW5kaW5nSWNvblwiXG4gICAgICAgICAgW2FsbFJvd3NTZWxlY3RlZF0gPSBcImFsbFJvd3NTZWxlY3RlZFwiXG4gICAgICAgICAgKHNvcnQpPVwib25Tb3J0KCRldmVudClcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiPlxuICAgICAgICA8L2RhdGF0YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAiLCI8ZGF0YXRhYmxlLWhlYWRlcj48L2RhdGF0YWJsZS1oZWFkZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVVE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUlFO1FBQUE7UUFBQTtNQUFBO01BR0E7UUFBQTtRQUFBO01BQUE7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQWNBO1FBQUE7UUFBQTtNQUFBO01BQ0E7UUFBQTtRQUFBO01BQUE7TUF2QkY7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQXVCaUM7Ozs7SUFWL0I7SUFEQTtJQUZBO0lBQ0E7SUFYRixTQWFFLFVBREEsV0FGQSxXQUNBLFVBWEY7SUFHRTtJQUhGLFNBR0UsVUFIRjtJQU1FO0lBTkYsU0FNRSxVQU5GO0lBZ0JFO0lBREE7SUFJQTtJQUNBO0lBQ0E7SUFIQTtJQUpBO0lBR0E7SUFqQkYsU0FnQkUsV0FEQSxXQUlBLFdBQ0EsV0FDQSxXQUhBLFdBSkEsV0FHQSxVQWpCRjs7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxTQUFBLFVBQUEsb0JBQUEsMkRBQUE7Ozs7O01BSkY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRzJDO0lBQ3pDO2dCQUFBOzs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUF3QndCOzs7O0lBekJ4QjtJQUhGLFNBR0UsU0FIRjtJQUtJO0lBQUE7SUFERixTQUNFLG1CQURGOztJQUZBO0lBRkYsU0FFRSxTQUZGOzs7OztJQU5OO0lBQ0k7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUVFO1FBQUE7UUFBQTtNQUFBO01BRkY7SUFBQTtnQkFBQTs7O0lBQUE7S0FBQTtnQkFBQTtJQUlpQztJQUMvQjtnQkFBQTs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBNkJNO0lBQ0Y7Ozs7SUE3QkY7SUFBQTtJQURGLFNBQ0UsbUJBREY7OztJQUZBO0lBSEYsU0FHRSxTQUhGOzs7OztNQ0RKO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTs7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
