Object.defineProperty(exports,"__esModule",{value:true});exports.createError=createError;exports.unsupportedMethodMessage=exports.unregisterInput=exports.shouldAttributeExpo=exports.registerInput=exports.isiOS=exports.isAndroid=exports.focusInput=exports.currentlyFocusedInput=void 0;var _reactNative=require("react-native");var TextInputState=require('react-native/Libraries/Components/TextInput/TextInputState');var shouldAttributeExpo=function shouldAttributeExpo(){try{return!!_reactNative.NativeModules.NativeUnimoduleProxy;}catch(_unused){return false;}};exports.shouldAttributeExpo=shouldAttributeExpo;var isiOS=_reactNative.Platform.OS==='ios';exports.isiOS=isiOS;var isAndroid=_reactNative.Platform.OS==='android';exports.isAndroid=isAndroid;function createError(error){return{code:error.code,message:error.message,localizedMessage:error.localizedMessage,declineCode:error.declineCode,stripeErrorCode:error.stripeErrorCode,type:error.type};}var unsupportedMethodMessage=function unsupportedMethodMessage(field){return field+" method is not supported. Consider to upgrade react-native version to 0.63.x or higher";};exports.unsupportedMethodMessage=unsupportedMethodMessage;var focusInput=function focusInput(ref){if('focusInput'in TextInputState){TextInputState.focusInput(ref);}else{if(__DEV__){console.log(unsupportedMethodMessage('focusInput'));}}};exports.focusInput=focusInput;var registerInput=function registerInput(ref){if('registerInput'in TextInputState){TextInputState.registerInput(ref);}else{if(__DEV__){console.log(unsupportedMethodMessage('registerInput'));}}};exports.registerInput=registerInput;var unregisterInput=function unregisterInput(ref){if('unregisterInput'in TextInputState){TextInputState.unregisterInput(ref);}else{if(__DEV__){console.log(unsupportedMethodMessage('unregisterInput'));}}};exports.unregisterInput=unregisterInput;var currentlyFocusedInput=function currentlyFocusedInput(){if('currentlyFocusedInput'in TextInputState){return TextInputState.currentlyFocusedInput();}else{if(__DEV__){console.log(unsupportedMethodMessage('currentlyFocusedInput'));}}};exports.currentlyFocusedInput=currentlyFocusedInput;
//# sourceMappingURL=helpers.js.map