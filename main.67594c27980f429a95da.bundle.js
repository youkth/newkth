(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),defineProperty=__webpack_require__(142),objectSpread2=__webpack_require__(83),slicedToArray=__webpack_require__(74),input=__webpack_require__(73),container=__webpack_require__(3),shared_button=__webpack_require__(53),shared_text=__webpack_require__(40);function Form(){var _useState=Object(react.useState)({name:"",password:""}),_useState2=Object(slicedToArray.a)(_useState,2),formValues=_useState2[0],setFormValues=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),isError=_useState4[0],setIsError=_useState4[1],handleInput=function handleInput(e){setFormValues(Object(objectSpread2.a)(Object(objectSpread2.a)({},formValues),{},Object(defineProperty.a)({},e.target.name,e.target.value)))};return react_default.a.createElement(container.a,null,react_default.a.createElement(container.a,{margin:"15px 0;"},react_default.a.createElement(shared_text.a,{block:!0,margin:"0 0 20px 0"},"이름을 입력하세요"),react_default.a.createElement(input.a,{name:"name",onChange:handleInput,value:formValues.name})),react_default.a.createElement(container.a,{margin:"15px 0;"},react_default.a.createElement(shared_text.a,{block:!0,margin:"0 0 20px 0"},"비밀번호를 입력하세요"),react_default.a.createElement(input.a,{name:"password",onChange:handleInput,value:formValues.password})),isError?react_default.a.createElement(shared_text.a,{color:"red",margin:"10px 0"},"정보를 전부 입력해 주세요"):null,react_default.a.createElement(shared_button.a,{center:!0,padding:"15px 0",color:"mint",onClick:function handleSubmit(){var name=formValues.name,password=formValues.password;setIsError(!name||!password)}},"로그인"))}Form.__docgenInfo={description:"",methods:[],displayName:"Form"};var signin_form=Form;function Userlist(){return react_default.a.createElement("div",null)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\signin\\form.js"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src\\components\\signin\\form.js"}),Userlist.__docgenInfo={description:"",methods:[],displayName:"Userlist"};var user_list=Userlist;function Signin(){return react_default.a.createElement(container.a,{basic:!0},react_default.a.createElement(signin_form,null),react_default.a.createElement(user_list,null))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\signin\\user-list.js"]={name:"Userlist",docgenInfo:Userlist.__docgenInfo,path:"src\\components\\signin\\user-list.js"}),Signin.__docgenInfo={description:"",methods:[],displayName:"Signin"};__webpack_exports__.a=Signin;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\signin\\index.js"]={name:"Signin",docgenInfo:Signin.__docgenInfo,path:"src\\components\\signin\\index.js"})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39);function _templateObject(){var data=Object(C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    box-sizing:border-box;\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    background-color:",";\n    ","\n    ","\n    ","\n    "," \n    ","\n    ","\n    ","\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.a=styled_components__WEBPACK_IMPORTED_MODULE_1__.b.div(_templateObject(),(function(_ref){return _ref.basic&&"width:100%; max-width:700px; margin:50px auto 0 auto;"}),(function(_ref2){var display=_ref2.display;return display&&"display:".concat(display,";")}),(function(_ref3){return _ref3.block&&"display:block;"}),(function(_ref4){return _ref4.inlineblock&&"display:inline-block;"}),(function(_ref5){return _ref5.center&&"font-size:0; text-align:center;"}),(function(_ref6){var hbg=_ref6.hbg;return hbg&&"&.active,&:hover{background:".concat(hbg,"};")}),(function(_ref7){var hcolor=_ref7.hcolor;return hcolor&&"&.active,&:hover{color:".concat(hcolor,"};")}),(function(_ref8){return _ref8.flex&&"display:flex;"}),(function(_ref9){return _ref9.flexCenter&&"display:flex; align-items: center;"}),(function(_ref10){var width=_ref10.width;return width&&"width:".concat(width,";")}),(function(_ref11){var maxwidth=_ref11.maxwidth;return maxwidth&&"max-width:".concat(maxwidth,";")}),(function(_ref12){var minwidth=_ref12.minwidth;return minwidth&&"min-width:".concat(minwidth,";")}),(function(_ref13){var height=_ref13.height;return height&&"height:".concat(height,";")}),(function(_ref14){var margin=_ref14.margin;return margin&&"margin:".concat(margin,";")}),(function(_ref15){var padding=_ref15.padding;return padding&&"padding:".concat(padding,";")}),(function(_ref16){var border=_ref16.border;return border&&"border:".concat(border,";")}),(function(_ref17){return _ref17.bgcolor||"#fff"}),(function(_ref18){var border=_ref18.border;return border&&"border:".concat(border,";")}),(function(_ref19){var bdTop=_ref19.bdTop;return bdTop&&"border-top:".concat(bdTop,";")}),(function(_ref20){var bdBottom=_ref20.bdBottom;return bdBottom&&"border-bottom:".concat(bdBottom,";")}),(function(_ref21){var bdLeft=_ref21.bdLeft;return bdLeft&&"border-left:".concat(bdLeft,";")}),(function(_ref22){var bdRight=_ref22.bdRight;return bdRight&&"border-right:".concat(bdRight,";")}),(function(_ref23){var bg=_ref23.bg;return bg&&"background:".concat(bg,";")}),(function(_ref24){var color=_ref24.color;return color&&"color:".concat(color,";")}))},308:function(module,exports,__webpack_require__){__webpack_require__(309),__webpack_require__(455),__webpack_require__(456),module.exports=__webpack_require__(619)},373:function(module,exports){},40:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39),_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);function _templateObject(){var data=Object(C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.a=styled_components__WEBPACK_IMPORTED_MODULE_1__.b.span(_templateObject(),(function(_ref){return _ref.center&&"text-align: center;"}),(function(_ref2){var size=_ref2.size;return"font-size: ".concat(size||13,"px;")}),(function(_ref3){return _ref3.block&&"display: block;"}),(function(_ref4){return _ref4.bold&&"font-weight: bold;"}),(function(_ref5){var margin=_ref5.margin;return margin&&"margin: ".concat(margin,";")}),(function(_ref6){var padding=_ref6.padding;return padding&&"padding: ".concat(padding,";")}),(function(_ref7){var color=_ref7.color;return"color: ".concat(_color__WEBPACK_IMPORTED_MODULE_2__.a[color]||_color__WEBPACK_IMPORTED_MODULE_2__.a.black,";")}))},41:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={blue:"#358fff",mint:"#26cec2",red:"#fd2e68",black:"#3a3a3a",gray:"#dedede",white:"#ffffff"}},53:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39),_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);function _templateObject(){var data=Object(C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  border: none;\n  color: ",";\n  cursor:pointer;\n  display:inline-block;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.a=styled_components__WEBPACK_IMPORTED_MODULE_1__.b.button(_templateObject(),_color__WEBPACK_IMPORTED_MODULE_2__.a.white,(function(_ref){return _ref.full&&"width: 100%;"}),(function(_ref2){var width=_ref2.width;return width&&"width: ".concat(width,";")}),(function(_ref3){var margin=_ref3.margin;return margin&&"margin: ".concat(margin,";")}),(function(_ref4){return _ref4.center&&"display:block; width:500px; margin: 0 auto;"}),(function(_ref5){var padding=_ref5.padding;return padding&&"padding: ".concat(padding,";")}),(function(_ref6){var fontSize=_ref6.fontSize;return"font-size: ".concat(fontSize||15,"px;")}),(function(_ref7){var color=_ref7.color;return"background: ".concat(_color__WEBPACK_IMPORTED_MODULE_2__.a[color]||_color__WEBPACK_IMPORTED_MODULE_2__.a.blue,";")}),(function(_ref8){return _ref8.disable&&"background: ".concat(_color__WEBPACK_IMPORTED_MODULE_2__.a.gray,";")}),(function(_ref9){var fcolor=_ref9.fcolor;return fcolor&&"color: ".concat(fcolor,";")}),(function(_ref10){var size=_ref10.size;return size&&"font-size: ".concat(size,";")}))},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(303);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(651)],module)}.call(this,__webpack_require__(620)(module))},651:function(module,exports,__webpack_require__){var map={"./shared/button/button.stories.js":652,"./shared/container/container.stories.js":654,"./signin/signin.stories.js":655,"./total/total.stories.js":659};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=651},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicButton",(function(){return BasicButton}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54);__webpack_exports__.default={title:"Button",components:___WEBPACK_IMPORTED_MODULE_1__.a};var BasicButton=function BasicButton(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,{full:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("full",!1),color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("color",["white","blue","gray","red","mint","black"],"blue")},"제출")};BasicButton.story={name:"기본 버튼"},BasicButton.__docgenInfo={description:"",methods:[],displayName:"BasicButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\shared\\button\\button.stories.js"]={name:"BasicButton",docgenInfo:BasicButton.__docgenInfo,path:"src\\components\\shared\\button\\button.stories.js"})},654:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicContainer",(function(){return BasicContainer})),__webpack_require__.d(__webpack_exports__,"BasicContainer2",(function(){return BasicContainer2}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54);__webpack_exports__.default={title:"Container",components:___WEBPACK_IMPORTED_MODULE_1__.a};var BasicContainer=function BasicContainer(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,{padding:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("padding",""),centered:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("centered",!1),maxWidth:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("maxWidth",""),border:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("border",!1)},"Basic Container")},BasicContainer2=function BasicContainer2(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,null,"Basic Container")};BasicContainer.story={name:"기본 컨테이너"},BasicContainer2.story={name:"기본 컨테이너2"},BasicContainer.__docgenInfo={description:"",methods:[],displayName:"BasicContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\shared\\container\\container.stories.js"]={name:"BasicContainer",docgenInfo:BasicContainer.__docgenInfo,path:"src\\components\\shared\\container\\container.stories.js"}),BasicContainer2.__docgenInfo={description:"",methods:[],displayName:"BasicContainer2"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\shared\\container\\container.stories.js"]={name:"BasicContainer2",docgenInfo:BasicContainer2.__docgenInfo,path:"src\\components\\shared\\container\\container.stories.js"})},655:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicSignin",(function(){return BasicSignin}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(110);__webpack_exports__.default={title:"Login",components:___WEBPACK_IMPORTED_MODULE_1__.a};var BasicSignin=function BasicSignin(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__.a,null)};BasicSignin.story={name:"에러체크"},BasicSignin.__docgenInfo={description:"",methods:[],displayName:"BasicSignin"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\signin\\signin.stories.js"]={name:"BasicSignin",docgenInfo:BasicSignin.__docgenInfo,path:"src\\components\\signin\\signin.stories.js"})},659:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicSignin",(function(){return total_stories_BasicSignin}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router_dom=__webpack_require__(144),react_router=__webpack_require__(10),taggedTemplateLiteral=__webpack_require__(38),styled_components_browser_esm=__webpack_require__(39);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n*{margin:0; padding:0; border:0; list-style:none; outline:none; text-decoration:none;}\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  dfn,\n  del,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n    display: none;\n  }\n  body {\n    line-height: 1;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-touch-callout: none;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  select {\n    border-style: none;\n    background: transparent;\n    appearance: none;\n  }\n  b,\n  strong {\n    font-weight: bold;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var global_style=Object(styled_components_browser_esm.a)(_templateObject()),container=__webpack_require__(3),shared_text=__webpack_require__(40),Ul=container.a.withComponent("ul"),Li=container.a.withComponent("li"),Href=container.a.withComponent(react_router_dom.b),PATH=[{path:"/home",label:"home"},{path:"/",label:"todo"},{path:"/signin",label:"signin"},{path:"/error",label:"error"}];function GlobalNavbar(){return react_default.a.createElement(container.a,null,react_default.a.createElement(Ul,{center:!0,width:"90%",margin:"50px auto 0 auto"},PATH.map((function(_ref,index){var path=_ref.path,label=_ref.label;return react_default.a.createElement(Li,{key:index,margin:"0 10px",inlineblock:!0},react_default.a.createElement(Href,{to:path,exact:"/"===path,padding:"10px 30px",border:"1px solid #eee",bg:"#333",hbg:"blue",display:"inline-block"},react_default.a.createElement(shared_text.a,{size:"20",color:"white"},label)))}))))}GlobalNavbar.__docgenInfo={description:"",methods:[],displayName:"GlobalNavbar"};var global_navbar=GlobalNavbar;function HomePage(){return react_default.a.createElement(container.a,{basic:!0},"메인입니다.")}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\common\\global-navbar.js"]={name:"GlobalNavbar",docgenInfo:GlobalNavbar.__docgenInfo,path:"src\\components\\common\\global-navbar.js"}),HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"};var home=HomePage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\pages\\home.js"]={name:"HomePage",docgenInfo:HomePage.__docgenInfo,path:"src\\pages\\home.js"});var signin=__webpack_require__(110);function SigninPage(){return react_default.a.createElement(container.a,null,react_default.a.createElement(signin.a,null))}SigninPage.__docgenInfo={description:"",methods:[],displayName:"SigninPage"};var pages_signin=SigninPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\pages\\signin.js"]={name:"SigninPage",docgenInfo:SigninPage.__docgenInfo,path:"src\\pages\\signin.js"});var objectSpread2=__webpack_require__(83),toConsumableArray=__webpack_require__(307),regenerator=__webpack_require__(22),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(76),slicedToArray=__webpack_require__(74),input=__webpack_require__(73),shared_button=__webpack_require__(53),H1=shared_text.a.withComponent("h1");function Header(_ref){var addData=_ref.addData,_useState=Object(react.useState)(""),_useState2=Object(slicedToArray.a)(_useState,2),text=_useState2[0],setText=_useState2[1];return react_default.a.createElement(container.a,null,react_default.a.createElement(H1,{size:"30",margin:"0 0 20px 0",color:"mint",bold:!0,center:!0},"TODO APP"),react_default.a.createElement(container.a,{flex:!0},react_default.a.createElement(input.a,{type:"text",width:"80%",onChange:function handleChange(e){return setText(e.target.value)},value:text,placeholder:"내용을 입력하세요."}),react_default.a.createElement(shared_button.a,{width:"20%",onClick:function handleClick(){text.length>0&&addData(text),setText("")}},"내용추가")))}Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var header=Header;function AddBox(_ref){var _ref$todo=_ref.todo,id=_ref$todo.id,title=_ref$todo.title,isDone=_ref$todo.isDone,onDelete=(_ref.onUpdateStatus,_ref.onDelete);return react_default.a.createElement(container.a,{flexCetner:!0,padding:"10px 0",bdBottom:"1px solid #dedede"},react_default.a.createElement(input.a,{width:"30px",height:"30px",type:"checkbox",defaultChecked:isDone}),react_default.a.createElement(shared_text.a,null,title,"   ",isDone?"[완료]":"[진행중]"),react_default.a.createElement(shared_button.a,{onClick:function onClick(){return onDelete(id)},disable:!0,size:"12px",fcolor:"#333",margin:"0 0 0 10px",padding:"3px 10px"},"DELETE"))}function Body(_ref2){var todos=_ref2.todos,onDelete=_ref2.onDelete,onUpdateStatus=_ref2.onUpdateStatus;return react_default.a.createElement(container.a,null,todos.map((function(todo){return react_default.a.createElement(AddBox,{todo:todo,onDelete:onDelete,onUpdateStatus:onUpdateStatus,key:todo.id})})))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\todo\\header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src\\components\\todo\\header.js"}),Body.__docgenInfo={description:"",methods:[],displayName:"Body"};var body=Body;function Footer(_ref){var count=_ref.count;return react_default.a.createElement(container.a,{margin:"20px 0 0 0",padding:"5px 10px",bg:"#26cec2",color:"#fff"},count," : ITEM")}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\todo\\body.js"]={name:"Body",docgenInfo:Body.__docgenInfo,path:"src\\components\\todo\\body.js"}),Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var footer=Footer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\todo\\footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src\\components\\todo\\footer.js"});var BASE_URL="http://localhost:8000/todo";function fetchTodos(){return _fetchTodos.apply(this,arguments)}function _fetchTodos(){return(_fetchTodos=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){var response;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(BASE_URL);case 2:if((response=_context.sent).ok){_context.next=5;break}return _context.abrupt("return",[]);case 5:return _context.abrupt("return",response.json());case 6:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function Todo(){var _useState=Object(react.useState)([]),_useState2=Object(slicedToArray.a)(_useState,2),todos=_useState2[0],setTodos=_useState2[1];Object(react.useEffect)((function(){function _fetchAndSetTodos(){return(_fetchAndSetTodos=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.t0=setTodos,_context.next=3,fetchTodos();case 3:_context.t1=_context.sent,(0,_context.t0)(_context.t1);case 5:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}!function fetchAndSetTodos(){return _fetchAndSetTodos.apply(this,arguments)}()}),[]);return react_default.a.createElement(container.a,{basic:!0,padding:"30px",border:"1px solid #dedede"},react_default.a.createElement(header,{addData:function handleAdd(data){console.log(data),setTodos([].concat(Object(toConsumableArray.a)(todos),[{id:Date.now(),title:data,isDone:!1}]))}}),react_default.a.createElement(body,{todos:todos,onDelete:function handleDelete(id){setTodos(todos.filter((function(todo){return todo.id!==id})))},onUpdateStatus:function handleUpdateStatus(id){setTodos(todos.map((function(todo){return todo.id===id?Object(objectSpread2.a)(Object(objectSpread2.a)({},todo),{},{isDone:!todo.isDone}):todo})))}}),react_default.a.createElement(footer,{count:todos.length}))}Todo.__docgenInfo={description:"",methods:[],displayName:"Todo"};var components_todo=Todo;function TodoPage(){return react_default.a.createElement(container.a,null,react_default.a.createElement(components_todo,null))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\todo\\index.js"]={name:"Todo",docgenInfo:Todo.__docgenInfo,path:"src\\components\\todo\\index.js"}),TodoPage.__docgenInfo={description:"",methods:[],displayName:"TodoPage"};var pages_todo=TodoPage;function ErrorPage(){return react_default.a.createElement(container.a,{basic:!0},"에러입니다.")}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\pages\\todo.js"]={name:"TodoPage",docgenInfo:TodoPage.__docgenInfo,path:"src\\pages\\todo.js"}),ErrorPage.__docgenInfo={description:"",methods:[],displayName:"ErrorPage"};var error=ErrorPage;function Total(){return react_default.a.createElement(react_router_dom.a,null,react_default.a.createElement(global_style,null),react_default.a.createElement(global_navbar,null),react_default.a.createElement(react_router.c,null,react_default.a.createElement(react_router.a,{exact:!0,path:"/home",component:home}),react_default.a.createElement(react_router.a,{exact:!0,path:"/",component:pages_todo}),react_default.a.createElement(react_router.a,{exact:!0,path:"/signin",component:pages_signin}),react_default.a.createElement(react_router.a,{exact:!0,path:"/error",component:error})))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\pages\\error.js"]={name:"ErrorPage",docgenInfo:ErrorPage.__docgenInfo,path:"src\\pages\\error.js"}),Total.__docgenInfo={description:"",methods:[],displayName:"Total"};var total=Total;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\total\\index.js"]={name:"Total",docgenInfo:Total.__docgenInfo,path:"src\\components\\total\\index.js"});__webpack_exports__.default={title:"Total",components:total};var total_stories_BasicSignin=function BasicSignin(){return react_default.a.createElement(total,null)};total_stories_BasicSignin.story={name:"total"},total_stories_BasicSignin.__docgenInfo={description:"",methods:[],displayName:"BasicSignin"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\total\\total.stories.js"]={name:"BasicSignin",docgenInfo:total_stories_BasicSignin.__docgenInfo,path:"src\\components\\total\\total.stories.js"})},73:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39),_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);function _templateObject(){var data=Object(C_Users_vos460_Desktop_kth_react_test01_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 15px;\n  font-size: 16px;\n  border: 1px solid ",";\n  box-sizing: border-box;\n  display:inline-block;\n  "," \n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.a=styled_components__WEBPACK_IMPORTED_MODULE_1__.b.input(_templateObject(),_color__WEBPACK_IMPORTED_MODULE_2__.a.gray,(function(_ref){var width=_ref.width;return"width: ".concat(width||"100%",";")}))}},[[308,1,2]]]);
//# sourceMappingURL=main.67594c27980f429a95da.bundle.js.map