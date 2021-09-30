"use strict";(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[5293],{442:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n,i=a(1531),r=(a(7294),a(4983)),l=a(4295),s=["components"],o={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),p={_frontmatter:o},d=l.Z;function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All values defined in the Helm chart ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file or in your custom override file become part of the Helm release definition."),(0,r.kt)("p",null,"As of Helm v3, the release definition is stored as a Kubernetes Secret resource by default, as opposed to a ConfigMap.\nThis provides additional security to any credentials defined as values in the release, in comparison to release definitions being stored as ConfigMaps in Helm v2."),(0,r.kt)(m,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"You may find additional information about Secrets and how to define them in Kubernetes in the official documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes Secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"Encrypting Secret Data at Rest")))),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"spm")," chart will generate all of the secrets it needs. However, you may want to manage them outside of a Helm release, and point to existing secrets.\nThe following is a list of the Secrets which may be provided externally, and the data they must provide."),(0,r.kt)("p",null,"The descriptions refer to 2 variants of encryption/encoding: SPM and XOR."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm.biz/EncryptingSPMPasswords"},"SPM encryption")," refers to the values obtained from the ",(0,r.kt)("inlineCode",{parentName:"li"},"build.sh encrypt -Dpassword=<password>")," command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/was-liberty/base?topic=applications-securityutility-command"},"XOR encoding")," refers to the values obtained from the ",(0,r.kt)("inlineCode",{parentName:"li"},"$WLP_HOME/bin/securityUtility encode <password>")," command.")),(0,r.kt)("h2",null,"SPM Secrets"),(0,r.kt)("p",null,"The secrets are structured the following way - the top-level key is the property, which must be set in the override values file, and nested in it are the keys that must be defined for the secret along with their description.\nIf the following top-level keys are not provided, the secrets will be generated by the Helm chart, prefixed with the Helm release name."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global.imagePullSecret.secretName")," (type: kubernetes.io/dockerconfigjson)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global.hubPullSecret.secretName")," (type: kubernetes.io/dockerconfigjson)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global.database.credsSecretName")," (type: Opaque)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPM_DB_USR"),": Database username for datastore connections"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPM_DB_PSW"),": SPM encrypted password for the datastore connections (used by Batch processes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XOR_DB_PSW"),": XOR encoded password for the datastore connections (used by WebSphere Liberty)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global.mq.queueManager.secret.name")," (type: Opaque)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adminPasswordKey"),": Password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," user in the ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/ibmcom/mq"},"IBM MQ Docker image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appPasswordKey"),": Password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," user in the ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/ibmcom/mq"},"IBM MQ Docker image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appUsername"),": Username for MQ connections"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global.mq.tlsSecretName")," (type: variable - see options)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When IBM MQ is hosted on VMs outside the cluster (type: Opaque):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key_{{ $qmgrName }}.arm"),": A certificate file for each of the Queue Managers (one for every application)"))),(0,r.kt)("li",{parentName:"ul"},"When IBM MQ is hosted in containers inside the cluster (type: kubernetes.io/tls)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tls.key"),": (optional) A private key file to configure in IBM MQ Containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tls.crt"),": (optional) A certificate file to configure in IBM MQ Containers"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"https://img.shields.io/badge/-SPM_8.0.0.0-green",alt:"SPM 8.0.0.0"}),(0,r.kt)("inlineCode",{parentName:"li"},"apps.jwtConfig.secretName")," (type: kubernetes.io/tls)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tls.key"),": A private key file for signing JSON Web Tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tls.crt"),": A certificate file for signing JSON Web Tokens"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apps.ltpaKeys.secretName")," (type: Opaque)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ltpa.keys"),": Contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ltpa.keys")," file generated using ",(0,r.kt)("inlineCode",{parentName:"li"},"securityUtility createLTPAKeys --password=<password> --file=ltpa.keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"passwordKey"),": XOR encoded password for the ",(0,r.kt)("inlineCode",{parentName:"li"},"ltpa.keys")," file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apps.systemUser.credsSecretName")," (type: Opaque)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM_USER"),": The user under which JMS messages are executed (default: ",(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/spm/8.0.0?topic=clients-jms-messaging"},"SYSTEM"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM_PASSWORD"),": XOR encoded password for ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM_USER")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apps.wlpAdmin.secretName")," (type: Opaque)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeystorePassword"),": Password for the default WebSphere Liberty keystore"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XORKeystorePassword"),": XOR encoded password for the default WebSphere Liberty keystore"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebSphereUsername"),": Username of the administrative user for accessing the ",(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/was-liberty/base?topic=liberty-administering-using-admin-center"},"Liberty Admin Center"),", when enabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebSpherePassword"),": Password of the Liberty administrative user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XORWebSpherePassword"),": XOR encoded password of the Liberty administrative user")))))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),i=a(8650),r=a.n(i),l=a(5444),s=a(6949),o=a(1551),m=a(5900),p=a.n(m),d=function(e){var t,a=e.title,i=e.theme,r=e.tabs,l=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--1JmOE",(t={},t["PageHeader-module--with-tabs--ezlJE"]=l.length,t["PageHeader-module--dark-mode--aV7If"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--J1--B"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,s=r.baseUrl,o=r.subDirectory,m=s+"/edit/"+r.branch+o+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--2vJiZ"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--t_pLX",href:m},"Edit this page on GitHub"))):null},u=a(4275),k=a(5750),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===s,m=new RegExp(s+"/?(#.*)?$"),d=i.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--3CjGa"]=o,t),"PageTabs-module--list-item--2X02I")},n.createElement(l.Link,{className:"PageTabs-module--link--2anNu",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--18QsR"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--3gLeN"},o))))))},t}(n.Component),N=h,f=a(2881),b=a(6958),y=a(36),g=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--Bb0E9"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--1RmBx"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,i=e.location,m=e.Title,p=t.frontmatter,k=void 0===p?{}:p,h=t.relativePagePath,y=t.titleType,w=k.tabs,v=k.title,C=k.theme,S=k.description,P=k.keywords,E=k.date,M=(0,b.Z)().interiorTheme,T=(0,l.useStaticQuery)("2456312558").site.pathPrefix,x=T?i.pathname.replace(T,""):i.pathname,O=w?x.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",R=C||M;return n.createElement(o.Z,{tabs:w,homepage:!1,theme:R,pageTitle:v,pageDescription:S,pageKeywords:P,titleType:y},n.createElement(d,{title:m?n.createElement(m,null):v,label:"label",tabs:w,theme:R}),w&&n.createElement(N,{title:v,slug:x,tabs:w,currentTab:O}),n.createElement(f.Z,{padded:!0},a,n.createElement(c,{relativePagePath:h}),n.createElement(g,{date:E})),n.createElement(u.Z,{pageContext:t,location:i,slug:x,tabs:w,currentTab:O}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-deployment-secrets-mdx-b498ae733b849c70be58.js.map