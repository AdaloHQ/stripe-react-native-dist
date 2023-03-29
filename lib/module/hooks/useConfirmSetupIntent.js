var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.useConfirmSetupIntent=useConfirmSetupIntent;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=require("react");var _useStripe2=require("./useStripe");function useConfirmSetupIntent(){var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useStripe=(0,_useStripe2.useStripe)(),confirmSetupIntent=_useStripe.confirmSetupIntent;var _confirmSetupIntent=(0,_react.useCallback)(function _callee(paymentIntentClientSecret,data){var options,result,_args=arguments;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:options=_args.length>2&&_args[2]!==undefined?_args[2]:{};setLoading(true);_context.next=4;return _regenerator.default.awrap(confirmSetupIntent(paymentIntentClientSecret,data,options));case 4:result=_context.sent;setLoading(false);return _context.abrupt("return",result);case 7:case"end":return _context.stop();}}},null,null,null,Promise);},[confirmSetupIntent]);return{confirmSetupIntent:_confirmSetupIntent,loading:loading};}
//# sourceMappingURL=useConfirmSetupIntent.js.map