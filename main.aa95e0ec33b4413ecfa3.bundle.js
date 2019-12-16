(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{356:function(module,exports,__webpack_require__){__webpack_require__(357),__webpack_require__(469),module.exports=__webpack_require__(470)},378:function(module,exports){},470:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(249).configure(__webpack_require__(679),module)}).call(this,__webpack_require__(65)(module))},679:function(module,exports,__webpack_require__){var map={"./example.stories.tsx":680};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=679},680:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),react_2=__webpack_require__(249),dist_1=__importDefault(__webpack_require__(739)),example_1=__webpack_require__(684),personalInfoParams={formik:{initialValues:example_1.personalInfoInitialValues,validationSchema:example_1.personalInfoValidationSchema}},professionalInfoParams={formik:{initialValues:example_1.professionalInfoInitialValues,validationSchema:example_1.professionalInfoValidationSchema}},feedbackParams={formik:{initialValues:example_1.feedbackInitialValues,validationSchema:example_1.personalInfoValidationSchema}};react_2.storiesOf("Example/subforms",module).addDecorator(dist_1.default).add("PersonalInfoSubform",(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"The decorator can wrap Components that include Fields (or anything else expecting Formik context). This allows us to better componentise our larger forms."),react_1.default.createElement(example_1.PersonalInfoSubForm,null))}),personalInfoParams).add("ProfessionalInfoSubform",(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"Here we can play with the Professional Info subform as standalone"),react_1.default.createElement(example_1.ProfessionalInfoSubForm,null))}),professionalInfoParams).add("FeedbackSubform",(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"With better tooling it makes it easier for us to componentise and compose our subforms. Here we re-use the above PersonalInfoSubform in our FeedbackSubform."),react_1.default.createElement(example_1.FeedbackSubform,null))}),feedbackParams),react_2.storiesOf("Example/MyFields",module).addDecorator(dist_1.default).add("MyCheckbox",(function(){return react_1.default.createElement(example_1.MyCheckbox,{name:"likeFormik"},"Do you like formik?")}),{formik:{initialValues:{likeFormik:!0}}}).add("MySelect",(function(){return react_1.default.createElement(example_1.MySelect,{name:"formikRating",label:"How much do you like formik?"},react_1.default.createElement("option",{value:"3"},"I like it"),react_1.default.createElement("option",{value:"4"},"I really like it"),react_1.default.createElement("option",{value:"5"},"I absolutely love it"))}),{formik:{initialValues:{formikRating:"5"}}}).add("MyTextInput",(function(){return react_1.default.createElement(example_1.MyTextInput,{name:"formikTweet",label:"Describe formik in 80 characters",placeholder:"I love formik because..."})}),{formik:{initialValues:{formikTweet:""}}}),react_2.storiesOf("Example/standard",module).add("default",(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"This is an entire 'Form'. It has several Fields that are descendants of an overall Formik component. There is no need to supply a withFormik decorator here"),react_1.default.createElement(example_1.SignupForm,null))}))}).call(this,__webpack_require__(65)(module))},684:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),formik_1=__webpack_require__(143),Yup=__importStar(__webpack_require__(685));exports.personalInfoInitialValues={firstName:"Initial",lastName:"",email:""},exports.professionalInfoInitialValues={jobType:"",acceptedTerms:!1},exports.feedbackInitialValues=__assign(__assign({},exports.personalInfoInitialValues),{rating:1,remarks:""});var initialValues=__assign(__assign({},exports.personalInfoInitialValues),exports.professionalInfoInitialValues);exports.personalInfoValidationSchema=Yup.object({firstName:Yup.string().max(15,"Must be 15 characters or less").required("Required"),lastName:Yup.string().max(20,"Must be 20 characters or less").required("Required"),email:Yup.string().email("Invalid email address").required("Required")}),exports.professionalInfoValidationSchema=Yup.object({jobType:Yup.string().oneOf(["designer","development","product","other"],"Invalid Job Type").required("Required"),acceptedTerms:Yup.boolean().required("Required").oneOf([!0],"You must accept the terms and conditions.")});var validationSchema=Yup.object().concat(exports.personalInfoValidationSchema).concat(exports.professionalInfoValidationSchema),onSubmit=function(values,_a){var setSubmitting=_a.setSubmitting;setTimeout((function(){alert(JSON.stringify(values,null,2)),setSubmitting(!1)}),400)},style={label:{display:"block",fontWeight:"bold"},field:{display:"block"},error:{display:"block",color:"#ff4d4d"}};exports.MyCheckbox=function(_a){var children=_a.children,props=__rest(_a,["children"]),_b=formik_1.useField(__assign(__assign({},props),{type:"checkbox"})),field=_b[0],meta=_b[1];return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("label",{style:style.label},react_1.default.createElement("input",__assign({type:"checkbox"},field,props)),children),meta.touched&&meta.error?react_1.default.createElement("div",{style:style.error},meta.error):null)},exports.MySelect=function(props){var _a=formik_1.useField(props),field=_a[0],meta=_a[1];return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("label",{style:style.label,htmlFor:props.id||props.name},props.label),react_1.default.createElement("select",__assign({style:style.field},field,props)),meta.touched&&meta.error?react_1.default.createElement("div",{style:style.error},meta.error):null)},exports.MyTextInput=function(props){var _a=formik_1.useField(props),field=_a[0],meta=_a[1];return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("label",{style:style.label,htmlFor:props.id||props.name},props.label),react_1.default.createElement("input",__assign({style:style.field},field,props)),meta.touched&&meta.error?react_1.default.createElement("div",{style:style.error},meta.error):null)},exports.ProfessionalInfoSubForm=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(exports.MySelect,{label:"Job Type",name:"jobType"},react_1.default.createElement("option",{value:""},"Select a job type"),react_1.default.createElement("option",{value:"designer"},"Designer"),react_1.default.createElement("option",{value:"development"},"Developer"),react_1.default.createElement("option",{value:"product"},"Product Manager"),react_1.default.createElement("option",{value:"other"},"Other")),react_1.default.createElement(exports.MyCheckbox,{name:"acceptedTerms"},"I accept the terms and conditions"))},exports.PersonalInfoSubForm=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(exports.MyTextInput,{label:"First Name",name:"firstName",type:"text",placeholder:"Jane"}),react_1.default.createElement(exports.MyTextInput,{label:"Last Name",name:"lastName",type:"text",placeholder:"Doe"}),react_1.default.createElement(exports.MyTextInput,{label:"Email Address",name:"email",type:"email",placeholder:"jane@formik.com"}))},exports.FeedbackSubform=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(exports.PersonalInfoSubForm,null),react_1.default.createElement("label",{style:style.label,htmlFor:"rating"},"How good?"),react_1.default.createElement(formik_1.Field,{style:style.field,component:"select",name:"rating"},react_1.default.createElement("option",{value:0},"Bad"),react_1.default.createElement("option",{value:1},"Neutral"),react_1.default.createElement("option",{value:2},"Good")),react_1.default.createElement("label",{style:style.label,htmlFor:"remarks"},"Why so good?"),react_1.default.createElement(formik_1.Field,{style:style.field,component:"textarea",name:"remarks"}))},exports.SignupForm=function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h1",null,"Subscribe!"),react_1.default.createElement(formik_1.Formik,{initialValues:initialValues,validationSchema:validationSchema,onSubmit:onSubmit},react_1.default.createElement(formik_1.Form,null,react_1.default.createElement(exports.PersonalInfoSubForm,null),react_1.default.createElement(exports.ProfessionalInfoSubForm,null),react_1.default.createElement("button",{type:"submit"},"Submit"))))}},739:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(23),__webpack_require__(51),__webpack_require__(17),__webpack_require__(31);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),formik_esm=__webpack_require__(143),public_api=__webpack_require__(58),public_api_default=__webpack_require__.n(public_api);__webpack_require__.d(__webpack_exports__,"withFormik",(function(){return withFormik}));var __assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},withFormik=Object(public_api.makeDecorator)({name:"withFormik",parameterName:"formik",skipIfNoParametersOrOptions:!1,wrapper:function wrapper(getStory,context,_a){var submitter,parameters=_a.parameters,channel=public_api_default.a.getChannel();channel.on("formik/submit",(function(){return submitter&&submitter()}));var formikConfig=parameters,initialValues=formikConfig&&formikConfig.initialValues||{};return react_default.a.createElement(formik_esm.Formik,__assign({onSubmit:function onSubmit(v,_a){var setSubmitting=_a.setSubmitting;channel.emit("formik/on-submit",v),setSubmitting(!1)}},formikConfig,{initialValues:initialValues}),(function(_a){var values=_a.values,errors=_a.errors,touched=_a.touched,status=_a.status,isValidating=_a.isValidating,isSubmitting=_a.isSubmitting,submitCount=_a.submitCount,submitForm=_a.submitForm;return channel.emit("formik/render",{values:values,errors:errors,touched:touched,status:status,isValidating:isValidating,isSubmitting:isSubmitting,submitCount:submitCount}),submitter||(submitter=submitForm),react_default.a.createElement(formik_esm.Form,null,getStory(context))}))}});__webpack_exports__.default=withFormik}},[[356,1,2]]]);
//# sourceMappingURL=main.aa95e0ec33b4413ecfa3.bundle.js.map