(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),l=a(186),o=a(187),c=a(188),s=a(157),u=(a(181),a(158)),m=function(e){return r.a.createElement("div",{className:"project_container"},r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement("img",{src:e.imageSrcPath,alt:"Smiley face",style:{maxWidth:"100%"}})),r.a.createElement(c.a,null,r.a.createElement("h4",null,e.title,r.a.createElement("br",null),r.a.createElement("small",null,e.date)),r.a.createElement("p",null,e.description),r.a.createElement(o.a,null,r.a.createElement(u.a,{text:"Source Code",URL:e.sourceURL}),r.a.createElement(u.a,{text:"Hosted App",URL:e.hostedURL})))))},p=(a(159),a(182)),d=a.n(p),f=a(183),g=a.n(f),h=a(184),b=a.n(h),E="Cool React app",y="2019-03-28",w="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",v="https://github.com",q="http://www.google.com",x="Project 2 title",R="2019-03-03",S="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",k="https://github.com/",j="https://www.google.com",L="Project 3 title",U="2019-02-12",J="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",P="https://github.com/",A="https://www.google.com";t.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Projects Portfolio",body:"I think the best way of learning is by building Stuff."}),r.a.createElement("hr",null),r.a.createElement(l.a,{style:{marginTop:"2.5rem"}},r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(m,{imageSrcPath:d.a,title:E,date:y,description:w,sourceURL:v,hostedURL:q}))),r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(m,{imageSrcPath:g.a,title:x,date:R,description:S,sourceURL:k,hostedURL:j}))),r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(m,{imageSrcPath:b.a,title:L,date:U,description:J,sourceURL:P,hostedURL:A}))))))}},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=(a(33),a(149),i.a.createContext({})),s=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var u=a(153),m=a(161),p=a.n(m),d=a(154),f=a.n(d);function g(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,l=e.title,o=u.data.site,c=t||o.siteMetadata.description;return i.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:image",content:f.a},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}g.defaultProps={lang:"en",meta:[],keywords:["Jane Schwab"],description:"A quick glance at Jane's resume."},g.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var h=g,b=(a(162),a(155)),E=a.n(b),y=function(){return i.a.createElement("div",{className:"top_border",style:{marginBottom:"0px",width:"100%"}},i.a.createElement("img",{style:{width:"100%",borderRadius:"unset"},src:E.a,alt:"banner"}))},w=a(185),v=a(186),q=a(187),x=a(188),R=(a(163),a(156),{marginTop:"3rem",marginBottom:"0",backgroundColor:"#708090",color:"#fff",paddingBottom:"0",width:"100%"}),S=function(){return i.a.createElement(w.a,{fluid:!0,style:R},i.a.createElement(v.a,{style:{maxWidth:"960px"}},i.a.createElement(q.a,null,i.a.createElement(x.a,null,i.a.createElement("h3",null,"Jane Schwab"),i.a.createElement("p",{style:{color:"midnightblue",fontSize:"1.3rem"}},i.a.createElement("a",{href:"mailto:jane.a.schwab@gmail.com"},i.a.createElement("span",{style:{color:"midnightblue"}},"jane.a.schwab@gmail.com"))),i.a.createElement("p",{style:{fontSize:"1.3rem"}},"If something caught your eye, feel free to reach out via",i.a.createElement("a",{href:"https://www.linkedin.com/in/jane-schwab-b7019538/",target:"_blank",rel:"noopener noreferrer",style:{color:"midnightblue "}}," LinkedIn "),"or",i.a.createElement("a",{href:"mailto:jane.a.schwab@gmail.com",target:"_blank",rel:"noopener noreferrer"}," email"),". I'm a quick learner and love hearing about new opportunities."))),i.a.createElement(q.a,{className:"text-center",style:{marginTop:"3rem"}},i.a.createElement(x.a,null,"Jane Schwab © ",(new Date).getFullYear(),", Built with 🌮",i.a.createElement("a",{href:"https://www.gatsbyjs.org"}," ",i.a.createElement("span",{className:"midnightblue"},"& Gatsby"))))))},k=function(e){var t=e.children;return i.a.createElement(s,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{title:"Jane Schwab",keywords:["gatsby","application","react","software developer","portfolio Site","material-UI","react-bootstrap","boostrap","API calling","Axios","Fetch","Javascript","Frontend Developer","Jane Schwab"]}),i.a.createElement(y,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px",paddingTop:0}},i.a.createElement("main",null,t)),i.a.createElement(S,null))},data:n})};k.propTypes={children:o.a.node.isRequired};t.a=k},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Software Developer with a Mechanical Engineering educaiton"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Software Developer with a Mechanical Engineering educaiton",description:"A quick glance at Jane's resume.",author:"Jane Schwab"}}}}},154:function(e,t,a){e.exports=a.p+"static/ogImage-679e0191a3ebe99064c44b0e3107500d.jpg"},155:function(e,t,a){e.exports=a.p+"static/banner-4a8f5791a990eebc200b6b939f62781c.png"},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(185),l=(a(168),{backgroundColor:"#fff"});t.a=function(e){return r.a.createElement(i.a,{fluid:!0,className:"myjumbo",style:l},r.a.createElement("div",{className:"myjumbo_content"},r.a.createElement("h1",null,e.title),r.a.createElement("span",null,r.a.createElement("p",null,e.body)),r.a.createElement("span",null,r.a.createElement("p",null,e.body2))))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(188);a(169);t.a=function(e){return r.a.createElement(i.a,{sm:4},r.a.createElement("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"button_styles text-center"},e.text)))}},182:function(e,t,a){e.exports=a.p+"static/cabin-56ec4ee72a91e8f3d954db6cccbf8ab2.png"},183:function(e,t,a){e.exports=a.p+"static/cake-a29c0b43958bf3638364e15ff646fffa.png"},184:function(e,t,a){e.exports=a.p+"static/game-107d31e81b23d07ad38c7cc4d1f7ea27.png"}}]);
//# sourceMappingURL=component---src-pages-projects-js-9331b050517a56251fda.js.map