(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(8),u=n(9),i=n(10),d=n(15),s=n(14),b=function(e){var t=e.children,n=e.title;return r.a.createElement("section",{className:"sections"},r.a.createElement("h2",null,n),t)},p=n(2),f=n(3);function m(){var e=Object(p.a)(["\n  margin-right: 30px;\n  background-color: white;\n  padding: 5px;\n  width:120px;\n  color: blueviolet;\n  font-size:22px;\n  border: 1px solid rgb(197, 150, 241);\n  border-radius: 10px;\n  outline: none;\n  &:hover,\n  &:active{\n    box-shadow: 2px 2px 1px 0px rgba(197, 150, 241, 0.8);\n  }\n"]);return m=function(){return e},e}function v(){var e=Object(p.a)(["\n  text-align: left;\n  max-width: 1170px;\n  padding: 20px;\n  font-size:22px;\n"]);return v=function(){return e},e}var g=f.a.div(v()),h=f.a.button(m()),E=function(e){var t=e.children;return r.a.createElement(g,null,t)};function k(e){var t=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{type:"button",onClick:function(){return t("good")}},"Good"),r.a.createElement(h,{type:"button",onClick:function(){return t("neutral")}},"Neutral"),r.a.createElement(h,{type:"button",onClick:function(){return t("bad")}},"Bad"))}function x(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",n),r.a.createElement("p",null,"Bad: ",a),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedback: ",o,"% "))}var F=function(e){var t=e.message;return r.a.createElement("p",null,t)},w=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.counterFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+=1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+=t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.trunc(100*e.state.good/e.countTotalFeedback())},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return r.a.createElement(E,null,r.a.createElement(b,{title:"Please leave feedback"},r.a.createElement(k,{onLeaveFeedback:this.counterFeedback})),r.a.createElement(b,{title:"Statistics"},0!==c?r.a.createElement(x,{good:t,neutral:n,bad:a,total:c,positivePercentage:o}):r.a.createElement(F,{message:"No feedback given"})))}}]),n}(a.Component);o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e53d00a4.chunk.js.map