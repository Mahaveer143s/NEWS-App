(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),r=a.n(s),c=(a(17),a(18),a(6),a(3));class i extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top bg-primary"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white","aria-current":"page",to:"/"},"News")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white",to:"/sports"},"Sports")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white",to:"/business"},"Business")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white",to:"/technology"},"Tech")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white",to:"/entertainment"},"Fun")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link text-white",to:"/health"},"Health"))),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-light",type:"submit"},"Search"))))))}}class o extends n.Component{render(){let{title:e,desc:t,imgUrl:a,url:n,date:s,author:r}=this.props;return l.a.createElement("div",null,l.a.createElement("div",{className:"card m-3",style:{width:"18rem"}},l.a.createElement("img",{src:a,className:"card-img-top",alt:"...",style:{width:"100%",height:"200px"}}),l.a.createElement("div",{className:"card-body"},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},l.a.createElement("h5",{className:"card-title"},e,"..")),l.a.createElement("p",{className:"card-text"},t,".."),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("p",{className:"card-text"},r),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-body-secondary"},"Date: ",s))))))}}class m extends n.Component{render(){return l.a.createElement("div",{className:"loader",style:{color:"blue"}},"Loading",l.a.createElement("span",null))}}var h=a(8);class p extends n.Component{constructor(){super(),this.fetchMoreData=()=>{this.setState({page:this.state.page+1},()=>{this.fetchNews()})},this.onNextFunc=()=>{this.setState(e=>({page:e.page+1}),()=>{this.fetchNews()})},this.onPrevFunc=()=>{this.setState(e=>({page:e.page-1}),()=>{this.fetchNews()})},this.state={articles:[],loading:!1,page:1,articlesLength:0}}async componentDidMount(){this.fetchNews()}async componentDidUpdate(e){e.Category!==this.props.Category&&(await this.setState({page:1,articles:[]}),this.fetchNews())}async fetchNews(){const{Category:e}=this.props,t=encodeURIComponent(e),a="https://newsapi.org/v2/top-headlines?country=in&category=".concat(t,"&apiKey=9b0012d882b34e0a98e9bcbb3c7c0dd7&page=").concat(this.state.page,"&pageSize=5");try{this.setState({loading:!0});const e=await fetch(a),t=await e.json();this.setState(e=>({loading:!1,articles:[...e.articles,...t.articles],articlesLength:t.totalResults}))}catch(n){console.error("Error fetching news:",n)}}render(){const{Category:e}=this.props;return l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",{className:"my-4"},"Latest NEWS - Top NEWS of ",e," at NEWS CODE"),l.a.createElement(h.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:this.state.articles.length<this.state.articlesLength,loader:this.state.loading&&l.a.createElement(m,null)},l.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},this.state.articles.map((e,t)=>l.a.createElement("div",{key:"".concat(e.url,"-").concat(t)},l.a.createElement(o,{url:e.url,title:e.title?e.title.slice(0,80):"The biggest News title",desc:e.description?e.description.slice(0,100):"This is the biggest breaking news of India",imgUrl:e.urlToImage?e.urlToImage:"https://th.bing.com/th/id/OIP.Fv3QKG4OmyHat9R5jYs9JwAAAA?rs=1&pid=ImgDetMain",date:e.publishedAt.slice(0,10),author:e.author?e.author:"Unknown"}))))),l.a.createElement("div",null,l.a.createElement("button",{disabled:this.state.page<=1,type:"button",onClick:this.onPrevFunc,className:"btn btn-outline-primary position-fixed bottom-0 start-0",style:{zIndex:3,margin:"5vh"}},"< Previous"),l.a.createElement("button",{disabled:this.state.articlesLength<5,type:"button",onClick:this.onNextFunc,className:"btn btn-outline-primary position-fixed bottom-0 end-0",style:{zIndex:3,margin:"5vh"}},"Next >")),this.state.loading&&l.a.createElement(m,null))}}var d=a(2);class g extends n.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(i,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(p,{Category:"general"})}),l.a.createElement(d.a,{path:"/business",element:l.a.createElement(p,{Category:"business"})}),l.a.createElement(d.a,{path:"/sports",element:l.a.createElement(p,{Category:"sports"})}),l.a.createElement(d.a,{path:"/technology",element:l.a.createElement(p,{Category:"technology"})}),l.a.createElement(d.a,{path:"/entertainment",element:l.a.createElement(p,{Category:"entertainment"})}),l.a.createElement(d.a,{path:"/health",element:l.a.createElement(p,{Category:"health"})}),l.a.createElement(d.a,{path:"/load",element:l.a.createElement(m,null)})))))}}var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:s,getTTFB:r}=t;a(e),n(e),l(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),u()},6:function(e,t,a){},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.02a95583.chunk.js.map