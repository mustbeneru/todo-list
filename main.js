(()=>{"use strict";var e={341:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),s=n(667),c=n.n(s),d=new URL(n(111),n.b),l=a()(r()),p=c()(d);l.push([e.id,`@font-face {\n    font-family: poppins;\n    src: url(${p});\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: poppins;\n}\n\nhtml {\n    height: 100vh;\n}\n\n\nbody {\n    font-family: poppins;\n    font-size: 1rem;\n    line-height: 1.5;\n    background-color: #242424;\n    color: #d9d9d9;\n}\n\n.header {\n    padding: 1rem;\n    font-size: 2rem;\n    background-color: black;\n}\n\nmain {\n    display: flex;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    width: 16%;\n    margin: 2rem 0 2rem 2rem;\n}\n\n.home button {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n    margin-top: .8rem;\n    margin-left: 1rem;\n    margin-right: 2rem;\n    padding: .3rem .8rem;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: white;\n    background-color: gray;\n    border: 1px solid rgb(0, 0, 0);\n}\n\n.today-button span {\n    margin-left: 1.5rem;\n}\n\n.week-button span {\n    margin-left: 0.5rem;\n}\n\n.month-button span {\n    margin-left: .3rem;\n}\n\n.home button:hover {\n    color: black;\n    background-color:#d9d9d9;\n    font-weight: bolder;\n}\n\n.project-section {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.add-project, .add-project-btn {\n    margin-left: .5rem;\n    cursor: pointer;\n}\n\n.add-project {\n    font-size: 1.2rem;\n}\n\n.add-project:hover {\n    background-color:#1b1a1a;\n    border-radius: 2rem;\n    font-weight: 500;\n}\n\n.add-project-btn {\n    border-radius: 50%;\n    padding: .5rem .8rem;\n    border-style: none;\n    background-color: gray;\n    margin-right: 1rem;\n    font-size: 1rem;\n}\n\n.add-project-btn:hover {\n    color: rgb(255, 255, 255);\n    font-weight: 2rem;\n}\n\n.add-project-input {\n    margin-left: 1rem;\n    width: 250px;\n    height: 40px;\n}\n\n.project-buttons {\n    display: flex;\n    gap: 1rem;\n    margin-top: 10px;\n    margin-left: 1.3rem;\n}\n\n.add-project-button {\n    border-radius: 8px;\n    font-family: poppins;\n    color: white;\n    border-style: none;\n    cursor: pointer;\n    padding: 10px 35px;\n    background-color: rgb(89, 132, 89);\n}\n\nform input {\n    font-family: poppins;\n    padding: .5rem 1rem;\n    color: black;\n}\n\n.cancel-project-button {\n    font-family: poppins;\n    cursor: pointer;\n    color: white;\n    border-radius: 8px;\n    border-style: none;\n    padding: 0 40px;\n    background-color: rgb(167, 62, 62);\n}\n\n.project-items {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    margin-left: 1.2rem;\n    list-style-type: none;\n}\n\n.item-container {\n    display: flex;\n    align-items: center;\n    gap: .8rem;\n    position: relative;\n}\n\n.item-container:hover {\n    background-color: gray;\n    border-radius: 2rem;\n    padding: 0 2rem 0 2rem;\n    color: #1e1e1e;\n    font-weight: bolder;\n}\n\n.item {\n    display: flex;\n}\n\n.remove-btn {\n    position: absolute;\n    right: 0;\n}\n\n#content {\n    margin: 2rem;\n    padding-left: 3rem;\n    padding-top: 1rem;\n    background-color: #1e1e1e;\n    width: 88%;\n    height: 85vh;\n}\n\n#content h2 {\n    font-size: 2rem;\n}\n\n.hidden {\n    display: none;\n}\n\n.todo-list li {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: .5rem;\n    margin-top: 1rem;\n}\n\n.todo-list img {\n    cursor: pointer;\n}\n\n.project-header {\n    display: flex;\n    gap: 1rem;\n    margin-top: .5rem;\n    align-items: center;\n}\n\n.add-task-btn {\n    border: 1px solid black;\n    font-family: poppins;\n    cursor: pointer;\n    font-size: 1.5rem;\n    padding: .4rem 1rem;\n    border-radius: 50%;\n}\n\n.add-task-btn:hover {\n    background-color: gray;\n}\n\n.todo-input-container {\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n}\n\n.description-input {\n    width: 300px;\n}\n\n.task-form {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.completed {\n    background-color: #E9EDED;\n    text-decoration: line-through;\n    color: rgb(0, 0, 0);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    width: 70%;\n    margin-top: 1rem;\n    background-color: gray;\n    border-radius: 2rem;\n    padding: .5rem 1rem;\n    justify-content: space-between;\n}\n\n.edit-form {\n    display: flex;\n    gap: 1rem;\n    margin-top: .5rem;\n}\n\n.save-button {\n    padding: .5rem 1rem;\n}\n\n.priority-label {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 2px;\n    margin-left: 1rem;\n    border-radius: 50%;\n}\n\n.edit-delete-btn {\n    gap: 1rem;\n    display: flex;\n    margin-right: .5rem;\n}\n\n.edit-delete-btn img {\n    cursor: pointer;\n}\n\n.priority-select {\n    padding: .5rem 1rem;\n}\n\n.confirm-btn,\n.cancel-btn {\n    padding: .3rem .8rem;\n}\n\n.task-details {\n    display: flex;\n    align-items: center;\n    justify-content:space-between;\n    width: 100%;\n}\n\n.left-container {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    width: 90%;\n}\n\n\n.task-details div:nth-child(1) {\n    width: 20%;\n    font-weight: 900;\n    color: rgb(0, 0, 0);\n}\n\n.task-details div:nth-child(2) {\n    max-width: 40%;\n    text-align: center;\n    word-wrap: break-word;\n}\n\n.task-details div:nth-child(3) {\n    width: 20%;\n}\n\n\n.todo-list {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n`,""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},111:(e,t,n)=>{e.exports=n.p+"35d26b781dc5fda684cc.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(341),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"f6f8bf1d4c3bda86b91e.svg",f=n.p+"de0bb67a90c508546224.svg",y=n.p+"82aee49300bf56d4b9c3.svg";class v{static saveProjects(e){localStorage.setItem("projects",JSON.stringify(e))}static loadProjects(){const e=localStorage.getItem("projects");return e?JSON.parse(e):[]}}class b{constructor(e){this.name=e,this.todos=[]}}class j{constructor(){this.projects=v.loadProjects(),this.selectedProject=null}addProject(e){if(e.length>=15)return void alert("Project name is too long!");if(0===e.length)return void alert("Field should not be empty");if(this.projects.some((t=>t.name===e)))return void alert("Project name already exists");const t=new b(e);return this.projects.push(t),this.saveToLocalStorage(),t}selectProject(e){return this.selectedProject=this.projects.find((t=>t.name===e)),this.saveToLocalStorage(),this.selectedProject}removeProject(e){this.projects.splice(e,1),this.saveToLocalStorage()}saveToLocalStorage(){v.saveProjects(this.projects)}}class L{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.status=!1}}(new class{constructor(){this.project=document.querySelector(".project-section"),this.addProject=document.querySelector(".add-project"),this.projectList=document.querySelector(".project-list-container"),this.todayButton=document.querySelector(".today-button"),this.weekButton=document.querySelector(".week-button"),this.monthButton=document.querySelector(".month-button"),this.currentView="",this.projectManager=new j}loadUI(){this.setDefaultView(),this.displayProjects(),this.setEventListeners()}setEventListeners(){this.addProject.addEventListener("click",(()=>this.createProjectForm())),this.projectList.addEventListener("click",(e=>{console.log(e),"LI"===e.target.tagName&&(this.projectManager.selectProject(e.target.textContent),this.displayProjectContent())})),this.todayButton.addEventListener("click",(()=>this.setActiveView("Today"))),this.weekButton.addEventListener("click",(()=>this.setActiveView("This Week"))),this.monthButton.addEventListener("click",(()=>this.setActiveView("This Month")))}setDefaultView(){this.displayTodoListsByDueDate("Today")}setActiveView(e){this.currentView=e,this.displayTodoListsByDueDate(e)}displayProjects(){const e=document.createElement("ul");e.classList.add("project-items"),this.projectList.innerHTML="",this.projectManager.projects.forEach((t=>{const n=document.createElement("div");n.classList.add("item-container");const o=document.createElement("div");o.textContent=">>> ";const r=document.createElement("li");r.classList.add("item"),r.textContent=t.name;const i=document.createElement("img");i.classList.add("remove-btn"),i.src=f,i.width=30,i.addEventListener("click",(()=>{this.projectManager.removeProject(t.name),this.projectManager.selectedProject=null,this.displayProjects(),this.displayProjectContent()})),n.append(o,r,i),e.append(n)})),this.projectList.append(e)}displayProjectContent(){const e=document.getElementById("content"),t=this.projectManager.selectedProject;if(null===t&&(e.innerHTML=""),t){e.innerHTML="";const n=document.createElement("div");n.classList.add("project-header");const o=document.createElement("h2");o.classList.add("header2"),o.textContent=t.name;const r=document.createElement("button");r.classList.add("add-task-btn"),r.textContent="+",r.addEventListener("click",(()=>{r.classList.toggle("hidden"),this.createTodoForm(i)}));const i=document.createElement("div");i.classList.add("todo-input-container");const a=document.createElement("div");a.classList.add("todo-list-container"),n.append(r,o),e.append(n,i,a),this.displayTodoList(a)}}displayTodoList(e){const t=this.projectManager.selectedProject,n=document.createElement("ul");n.classList.add("todo-list"),t.todos.forEach((e=>{const t=this.createTodoItem(e);1==e.status&&t.classList.toggle("completed"),n.appendChild(t)})),e.appendChild(n)}displayTodoListsByDueDate(e){const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("h2");n.classList.add("header2"),n.textContent=e+"'s Tasks";const o=document.createElement("div");o.classList.add("todo-list-container"),t.append(n,o),this.projectManager.projects.forEach((t=>{t.todos.forEach((t=>{const n=new Date(t.dueDate);switch(e){case"Today":if(this.isToday(n)){const e=this.createTodoItem(t);o.appendChild(e),1==t.status&&e.classList.toggle("completed")}break;case"This Week":if(this.isThisWeek(n)){const e=this.createTodoItem(t);o.appendChild(e),1==t.status&&e.classList.toggle("completed")}break;case"This Month":if(this.isThisMonth(n)){const e=this.createTodoItem(t);o.appendChild(e),1==t.status&&e.classList.toggle("completed")}}}))}))}createProjectForm(){console.log("Creating Project Form");const e=document.createElement("form"),t=document.createElement("input");t.type="text",t.minLength=10,t.placeholder="Project Name",t.classList.add("add-project-input");const n=document.createElement("div");n.classList.add("project-buttons");const o=document.createElement("button");o.classList.add("add-project-button"),o.textContent="Add";const r=document.createElement("button");r.classList.add("cancel-project-button"),r.textContent="Cancel",n.append(o,r),e.append(t,n),this.project.insertBefore(e,this.addProject),this.addProject.classList.toggle("hidden"),o.addEventListener("click",(n=>{n.preventDefault(),this.projectManager.addProject(t.value),e.remove(),this.addProject.classList.toggle("hidden"),console.log(this.projectManager.projects),this.displayProjects()})),r.addEventListener("click",(()=>{e.remove(),this.addProject.classList.toggle("hidden")}))}createTodoForm(e){const t=document.createElement("form");t.classList.add("task-form");const n=document.createElement("input");n.type="text",n.required=!0,n.placeholder="Task Title";const o=document.createElement("input");o.type="text",o.required=!0,o.classList.add("description-input"),o.placeholder="Task Description";const r=document.createElement("input");r.type="date",r.required=!0;const i=document.createElement("select");i.classList.add("priority-select"),i.required=!0,i.placeholder="Priority";const a=document.createElement("option");a.value="High",a.text="High";const s=document.createElement("option");s.value="Medium",s.text="Medium";const c=document.createElement("option");c.value="Low",c.text="Low",i.append(a,s,c);const d=document.createElement("button");d.classList.add("confirm-btn"),d.type="button",d.textContent="Confirm",d.addEventListener("click",(e=>{if(e.preventDefault(),t.checkValidity()){console.log("Adding task to a project");const e=new L(n.value,o.value,r.value,i.value);this.projectManager.selectedProject.todos.push(e),this.projectManager.saveToLocalStorage();const t=document.createElement("div");t.classList.add("priority-label"),this.updatePriorityColor(t,i.value),this.displayProjectContent()}else n.validity.valueMissing?n.setCustomValidity("Please fill in this field"):n.setCustomValidity(""),o.validity.valueMissing?o.setCustomValidity("Please fill in this field"):o.setCustomValidity(""),t.reportValidity()}));const l=document.createElement("button");l.classList.add("cancel-btn"),l.type="button",l.textContent="Cancel",l.addEventListener("click",(()=>{document.querySelector(".add-task-btn").classList.toggle("hidden"),t.remove()})),t.append(n,o,r,i,d,l),e.appendChild(t)}createTodoItem(e){const t=document.createElement("li");t.classList.add("todo-item");const n=document.createElement("div");n.classList.add("priority-label"),this.updatePriorityColor(n,e.priority),this.projectManager.saveToLocalStorage();const o=document.createElement("div");o.classList.add("left-container");const r=document.createElement("input");r.type="checkbox",r.className="status",r.required=!0,r.checked=e.status,r.addEventListener("click",(()=>{e.status=r.checked,t.classList.toggle("completed",e.status),this.projectManager.saveToLocalStorage(),console.log(e.status)}));const i=document.createElement("div");i.classList.add("task-details");const a=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");a.textContent=e.title,s.textContent=e.description,c.textContent=e.dueDate;const d=document.createElement("div");d.classList.add("edit-delete-btn");const l=document.createElement("img");l.src=g,l.width=30,l.addEventListener("click",(()=>{u.style.display="flex",i.style.display="none",n.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden"),p.classList.add("hidden"),t.style.backgroundColor="transparent"}));const p=document.createElement("img");p.src=y,p.width=30,p.addEventListener("click",(()=>{const t=this.projectManager;t.projects.forEach((n=>{const o=n.todos.indexOf(e);if(-1!==o){if(n.todos.splice(o,1),t.saveToLocalStorage(),document.querySelector(".header2").textContent===n.name)return void this.displayProjectContent();this.displayTodoListsByDueDate(this.currentView)}}))})),d.append(l,p);const u=document.createElement("form");u.classList.add("edit-form"),u.style.display="none";const m=document.createElement("input");m.type="text",m.placeholder="Task Title",m.required=!0,m.value=e.title;const h=document.createElement("input");h.type="text",h.classList.add("description-input"),h.placeholder="Description",h.required=!0,h.value=e.description;const f=document.createElement("input");f.type="date",f.value=e.dueDate,f.required=!0;const v=document.createElement("select"),b=document.createElement("option");b.value="High",b.text="High";const j=document.createElement("option");j.value="Medium",j.text="Medium";const L=document.createElement("option");L.value="Low",L.text="Low",v.append(b,j,L),v.classList.add("priority-select"),v.value=e.priority;const x=document.createElement("button");return x.classList.add("save-button"),x.textContent="Save",x.addEventListener("click",(o=>{if(o.preventDefault(),u.checkValidity()){p.classList.remove("hidden"),l.classList.remove("hidden"),r.classList.remove("hidden"),t.style.backgroundColor="gray",e.title=m.value,e.description=h.value,e.dueDate=f.value;const o=v.value;e.priority=v.value,this.updatePriorityColor(n,o),a.textContent=e.title,s.textContent=e.description,c.textContent=e.dueDate,i.append(a,s,c),u.style.display="none",i.style.display="flex",n.classList.remove("hidden"),this.projectManager.saveToLocalStorage()}else m.validity.valueMissing?m.setCustomValidity("Please fill in this field"):m.setCustomValidity(""),h.validity.valueMissing?h.setCustomValidity("Please fill in this field"):h.setCustomValidity(""),u.reportValidity()})),u.append(m,h,f,v,x),o.append(n,r,i),i.append(a,s,c),t.append(o,d,u),t}isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}isThisWeek(e){const t=new Date,n=new Date(t);return n.setDate(t.getDate()+7),e>=t&&e<=n}isThisMonth(e){const t=new Date,n=new Date(t);return n.setMonth(t.getMonth()+1),e>=t&&e<=n}updatePriorityColor(e,t){switch(t){case"High":e.style.backgroundColor="red";break;case"Medium":e.style.backgroundColor="orange";break;case"Low":e.style.backgroundColor="green";break;default:e.style.backgroundColor="gray"}}}).loadUI()})()})();