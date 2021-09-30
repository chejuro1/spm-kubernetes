"use strict";(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[2247],{8274:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(1531),r=(a(7294),a(4983)),l=a(4295),s=["components"],o={},i={_frontmatter:o},c=l.Z;function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you have feedback, or wish to raise an issue and you are not an IBM®\nrepresentative, please contact your local IBM Account Executive."),(0,r.kt)("p",null,"To submit an issue or provide feedback, please create\nan issue\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/spm-kubernetes/issues"},"here"),".\nWe strongly suggest that you click Watch or Star the repository on\nGitHub to be updated about the latest changes."),(0,r.kt)("h2",null,"Please follow the template for creating issues"),(0,r.kt)("p",null,"This is a basic template to follow if issues arise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Describe the bug:")),(0,r.kt)("p",null,"A clear and concise description of what the bug is."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to reproduce the behavior:")),(0,r.kt)("p",null,"Clear and concise steps to reproduce the behaviour"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One"),(0,r.kt)("li",{parentName:"ul"},"Two"),(0,r.kt)("li",{parentName:"ul"},"Three")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expected behavior:")),(0,r.kt)("p",null,"A clear and concise description of what you expected to happen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Screenshots:")),(0,r.kt)("p",null,"If applicable, add screenshots to help explain your problem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"System Information:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    OS: []\n    Docker Version: []\n    Minikube Version: []\n    Ant Version: []\n    Java Version: []\n    Liberty  Version: []\n    Cúram SPM Version: []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional context:")),(0,r.kt)("p",null,"Add any other context about the problem here."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(8650),l=a.n(r),s=a(5444),o=a(6949),i=a(1551),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,s=void 0===l?[]:l;return n.createElement("div",{className:u()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=s.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,i=l.subDirectory,c=o+"/edit/"+l.branch+i+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:c},"Edit this page on GitHub"))):null},d=a(4275),b=a(5750),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),m=r.replace(c,a);return n.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--3CjGa"]=i,t),"PageTabs-module--list-item--2X02I")},n.createElement(s.Link,{className:"PageTabs-module--link--2anNu",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},i))))))},t}(n.Component),g=h,k=a(2881),f=a(6958),E=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,u=t.frontmatter,b=void 0===u?{}:u,h=t.relativePagePath,E=t.titleType,N=b.tabs,y=b.title,x=b.theme,w=b.description,P=b.keywords,T=b.date,Z=(0,f.Z)().interiorTheme,B=(0,s.useStaticQuery)("2456312558").site.pathPrefix,C=B?r.pathname.replace(B,""):r.pathname,S=N?C.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",D=x||Z;return n.createElement(i.Z,{tabs:N,homepage:!1,theme:D,pageTitle:y,pageDescription:w,pageKeywords:P,titleType:E},n.createElement(m,{title:c?n.createElement(c,null):y,label:"label",tabs:N,theme:D}),N&&n.createElement(g,{title:y,slug:C,tabs:N,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(v,{date:T})),n.createElement(d.Z,{pageContext:t,location:r,slug:C,tabs:N,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-contact-us-mdx-dab0612063b6aca4adea.js.map