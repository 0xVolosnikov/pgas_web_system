(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{642:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),l=a(15),s=a(4),i=a(5),c=a(8),o=a(7),u=a(9),m=a(0),f=a.n(m),d=(a(19),a(58),a(17)),v=a(35),h=a(131),p=a.n(h),g=a(16),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={annotations:{},criterias:{}},v.a.annotations&&(a.state.annotation=v.a.annotations),v.a.learningProfile&&(a.state.learningProfile=v.a.learningProfile),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v.a.criterias&&v.a.schema||v.a.getCritsAndSchema().then(),e.next=3,v.a.getAnnotations();case 3:t=this.state,v.a.annotations&&(t.annotations=v.a.annotations),v.a.learningProfile&&(t.learningProfile=v.a.learningProfile),this.setState(t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveAnnotations",value:function(){var e=this;Object(g.c)("/api/updateAnnotations",{faculty:v.a.faculty,annotations:this.state.annotations,learningProfile:this.state.learningProfile}).then(function(t){t&&(v.a.getAnnotations().then(),e.props.history.push("/staff"))})}},{key:"render",value:function(){var e=this;return f.a.createElement("main",null,f.a.createElement("div",{id:"panel",className:"row justify_center"},f.a.createElement("div",{className:"col-9 general"},f.a.createElement("div",{className:"profile",style:{display:"flex","justify-content":"space-between"}},f.a.createElement("div",{className:"centered_ver"},f.a.createElement("p",{className:"headline"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f\u043c\u0438")),f.a.createElement("div",{style:{display:"flex"}},f.a.createElement("div",{className:"centered_ver"},f.a.createElement("button",{id:"DeleteButton",className:"btn btn-danger",value:"\u041d\u0430\u0437\u0430\u0434",onClick:function(){e.props.history.goBack()}},"\u041d\u0430\u0437\u0430\u0434")),f.a.createElement("div",{className:"centered_ver"},f.a.createElement("button",{id:"DeleteButton",className:"btn btn-success",value:"\u041d\u0430\u0437\u0430\u0434",onClick:function(){e.saveAnnotations()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))),f.a.createElement("hr",{className:"hr_blue"}),f.a.createElement("h5",null,"\u041a\u0430\u043a\u043e\u0439 \u0443 \u0432\u0430\u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (\u0447\u0442\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0414\u0421\u041f\u041e):"),f.a.createElement("textarea",{className:"form-control area_text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043a \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044e...",onChange:function(t){var a=e.state;a.learningProfile=t.target.value,e.setState(a)},value:this.state.learningProfile,style:{margin:"0"}}),v.a.criterias&&f.a.createElement("div",null,Object.keys(v.a.criterias).map(function(t){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h5",null,t),f.a.createElement("div",{style:{display:"flex"}},f.a.createElement("textarea",{className:"form-control area_text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043a \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044e...",onChange:function(a){var n=e.state;n.annotations[t]=a.target.value,e.setState(n)},value:e.state.annotations[t],style:{margin:"0"}}),f.a.createElement("div",{className:"desc_selectors",style:{whiteSpace:"pre-line",margin:"0",width:"50%"}},f.a.createElement(p.a,{className:"markdown_view",linkTarget:function(){return"_blank"},source:e.state.annotations[t]}))),f.a.createElement("br",null))})))))}}]),t}(m.Component);t.default=Object(d.a)(E)}}]);
//# sourceMappingURL=15.cfeba102.chunk.js.map