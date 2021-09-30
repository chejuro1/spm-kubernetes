"use strict";(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[102],{8936:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,r=a(1531),l=(a(7294),a(4983)),i=a(4295),o=["components"],s={},c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={_frontmatter:s},m=i.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Kubernetes object that is being created by using the code in this repository is a CronJob, which is scheduled to run every 30 minutes.\nTherefore, initially no pod is listed, but a pod is started after 30 minutes and is visible when you run the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," command."),(0,l.kt)(c,{mdxType:"InlineNotification"},(0,l.kt)("p",null,"The schedule can be adjusted using the ",(0,l.kt)("inlineCode",{parentName:"p"},"batch.programs.queued.schedule")," key.")),(0,l.kt)("p",null,"The pod runs the standard command ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sh runbatch")," that is described in ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/spm/8.0.0?topic=launcher-running-batch"},"Running the Batch Launcher"),"."),(0,l.kt)("p",null,"At the end of the execution, the pod stops but is not destroyed and a new pod is created after another 30 minutes. Access the log by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl logs pod/podname")," command."),(0,l.kt)("p",null,"You can delete the pod by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete pod/podname")," command."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(6949),s=a(1551),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:d()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=i.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:c},"Edit this page on GitHub"))):null},p=a(4275),h=a(5750),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),m=r.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--3CjGa"]=s,t),"PageTabs-module--list-item--2X02I")},n.createElement(i.Link,{className:"PageTabs-module--link--2anNu",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},s))))))},t}(n.Component),g=b,f=a(2881),E=a(6958),k=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,b=t.relativePagePath,k=t.titleType,y=h.tabs,N=h.title,w=h.theme,x=h.description,P=h.keywords,T=h.date,C=(0,E.Z)().interiorTheme,Z=(0,i.useStaticQuery)("2456312558").site.pathPrefix,L=Z?r.pathname.replace(Z,""):r.pathname,B=y?L.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",D=w||C;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:D,pageTitle:N,pageDescription:x,pageKeywords:P,titleType:k},n.createElement(m,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:D}),y&&n.createElement(g,{title:N,slug:L,tabs:y,currentTab:B}),n.createElement(f.Z,{padded:!0},a,n.createElement(u,{relativePagePath:b}),n.createElement(v,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:y,currentTab:B}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-batch-batch-processing-mdx-4a67d57d32fd0e73ad27.js.map