(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(e,t,n){"use strict";n.r(t);n(143);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=(n(140),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={value:""},t.handleSubmit=function(e){e.preventDefault(),t.props.addLink({description:"description",link:t.state.value})},t.handleChange=function(e){t.setState({value:e.target.value})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Dodaj"}))},t}(i.Component)),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,this.props.links.map(function(e){return o.a.createElement("a",{target:"_blank",href:e.link},e.description)}))},t}(i.Component),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={links:[]},t.addLink=function(e){var n=e.link,a=e.description;t.setState({links:[].concat(t.state.links,[{link:n,description:a}])},function(){return localStorage.setItem("links",JSON.stringify(t.state.links))})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=localStorage.getItem("links");(e=JSON.parse(e))&&this.setState({links:e})},n.render=function(){return o.a.createElement("div",null,o.a.createElement(u,{addLink:this.addLink}),o.a.createElement(c,{links:this.state.links}))},t}(o.a.Component);t.default=s},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(134),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(136),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,n){var a;e.exports=(a=n(138))&&a.default||a},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TailwindCSS Starter"}}}}},138:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(47),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},139:function(e,t,n){},140:function(e,t,n){"use strict";var a=n(137),r=n(0),i=n.n(r),o=n(135),u=n(4),c=n.n(u),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:"bg-teal text-white py-6"},i.a.createElement("div",{className:"container mx-auto"},i.a.createElement("h1",null,i.a.createElement(o.Link,{to:"/",className:"text-white no-underline"},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var l=s,d=n(141),p=n.n(d),f=(n(139),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(l,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"container mx-auto py-8"},t))},data:a})});f.propTypes={children:c.a.node.isRequired};t.a=f},143:function(e,t,n){"use strict";n(154)("link",function(e){return function(t){return e(this,"a","href",t)}})},154:function(e,t,n){var a=n(13),r=n(23),i=n(15),o=/"/g,u=function(e,t,n,a){var r=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-21353033056aa24d8111.js.map