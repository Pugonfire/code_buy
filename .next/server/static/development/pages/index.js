module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      marginTop: '10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "CrowdCoin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "Campaigns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/campaigns/new"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "item"
  }, "+"))));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children);
});

/***/ }),

/***/ "./ethereum/build/contracts/CampaignCreator.json":
/*!*******************************************************!*\
  !*** ./ethereum/build/contracts/CampaignCreator.json ***!
  \*******************************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"CampaignCreator","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"campaigns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minContribution","type":"uint256"},{"name":"description","type":"string"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedCampaigns","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50610d56806100206000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663141961bc811461005b5780634220d6561461009c5780634acb9d4f146100fc575b600080fd5b34801561006757600080fd5b50610073600435610161565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100a857600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100fa9583359536956044949193909101919081908401838280828437509497506101969650505050505050565b005b34801561010857600080fd5b506101116102d2565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014d578181015183820152602001610135565b505050509050019250505060405180910390f35b600080548290811061016f57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60003383836101a3610341565b808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102155781810151838201526020016101fd565b50505050905090810190601f1680156102425780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f080158015610265573d6000803e3d6000fd5b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff92909216919091179055505050565b6060600080548060200260200160405190810160405280929190818152602001828054801561033757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161030c575b5050505050905090565b6040516109d980610352833901905600608060405234801561001057600080fd5b506040516109d93803806109d983398101604090815281516020808401519284015160008054600160a060020a031916600160a060020a038516179055600184905590930180519193909161006b9160029190840190610074565b5050505061010f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b557805160ff19168380011785556100e2565b828001600101855582156100e2579182015b828111156100e25782518255916020019190600101906100c7565b506100ee9291506100f2565b5090565b61010c91905b808211156100ee57600081556001016100f8565b90565b6108bb8061011e6000396000f3006080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100a8578063110842cb146100c2578063119f87471461014c578063481c6a7514610154578063647c75e21461018557806381d12c58146101ba5780638a9cfd551461027c578063937e09b1146102e6578063c121b1d21461030d578063d7d1bbdb14610322575b600080fd5b3480156100b457600080fd5b506100c060043561033a565b005b3480156100ce57600080fd5b506100d7610420565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101115781810151838201526020016100f9565b50505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100c06104ab565b34801561016057600080fd5b506101696104e1565b60408051600160a060020a039092168252519081900360200190f35b34801561019157600080fd5b506101a6600160a060020a03600435166104f0565b604080519115158252519081900360200190f35b3480156101c657600080fd5b506101d2600435610505565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561023d578181015183820152602001610225565b50505050905090810190601f16801561026a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561028857600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100c09436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a031690506105f0565b3480156102f257600080fd5b506102fb610723565b60408051918252519081900360200190f35b34801561031957600080fd5b506102fb610729565b34801561032e57600080fd5b506100c060043561072f565b60008054600160a060020a0316331461035257600080fd5b600580548390811061036057fe5b906000526020600020906005020190508060020160149054906101000a900460ff1615151561038e57600080fd5b6004546002900481600401541115156103a657600080fd5b60028101546001820154604051600160a060020a039092169181156108fc0291906000818181858888f193505050501580156103e6573d6000803e3d6000fd5b50600201805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000017905550565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b505050505081565b60015434116104b957600080fd5b336000908152600360205260409020805460ff19166001908117909155600480549091019055565b600054600160a060020a031681565b60036020526000908152604090205460ff1681565b600580548290811061051357fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f8101859004850283018501909152808252919350918391908301828280156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b505050506001830154600284015460049094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b6105f86107b9565b600054600160a060020a0316331461060f57600080fd5b506040805160a0810182528481526020808201859052600160a060020a038416928201929092526000606082018190526080820181905260058054600181018083559282905283518051949593948694929093027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0019261069392849201906107f4565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516004909101555050505050565b60015481565b60045481565b3360009081526003602052604081205460ff16151561074d57600080fd5b600580548390811061075b57fe5b600091825260208083203384526003600590930201918201905260409091205490915060ff161561078b57600080fd5b3360009081526003820160205260409020805460ff1916600190811790915560049091018054909101905550565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061083557805160ff1916838001178555610862565b82800160010185558215610862579182015b82811115610862578251825591602001919060010190610847565b5061086e929150610872565b5090565b61088c91905b8082111561086e5760008155600101610878565b905600a165627a7a72305820096da120849503e62ac002d6d0429708c2702ea899e6384e3c0fe59bb34d1cba0029a165627a7a72305820eacc299333dc2026f270b3c5a3b8bc5f13ce5db03e3b34c6cbb0ab50e9c9c0090029","deployedBytecode":"0x6080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663141961bc811461005b5780634220d6561461009c5780634acb9d4f146100fc575b600080fd5b34801561006757600080fd5b50610073600435610161565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100a857600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100fa9583359536956044949193909101919081908401838280828437509497506101969650505050505050565b005b34801561010857600080fd5b506101116102d2565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014d578181015183820152602001610135565b505050509050019250505060405180910390f35b600080548290811061016f57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60003383836101a3610341565b808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102155781810151838201526020016101fd565b50505050905090810190601f1680156102425780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f080158015610265573d6000803e3d6000fd5b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff92909216919091179055505050565b6060600080548060200260200160405190810160405280929190818152602001828054801561033757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161030c575b5050505050905090565b6040516109d980610352833901905600608060405234801561001057600080fd5b506040516109d93803806109d983398101604090815281516020808401519284015160008054600160a060020a031916600160a060020a038516179055600184905590930180519193909161006b9160029190840190610074565b5050505061010f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b557805160ff19168380011785556100e2565b828001600101855582156100e2579182015b828111156100e25782518255916020019190600101906100c7565b506100ee9291506100f2565b5090565b61010c91905b808211156100ee57600081556001016100f8565b90565b6108bb8061011e6000396000f3006080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630344100681146100a8578063110842cb146100c2578063119f87471461014c578063481c6a7514610154578063647c75e21461018557806381d12c58146101ba5780638a9cfd551461027c578063937e09b1146102e6578063c121b1d21461030d578063d7d1bbdb14610322575b600080fd5b3480156100b457600080fd5b506100c060043561033a565b005b3480156100ce57600080fd5b506100d7610420565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101115781810151838201526020016100f9565b50505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100c06104ab565b34801561016057600080fd5b506101696104e1565b60408051600160a060020a039092168252519081900360200190f35b34801561019157600080fd5b506101a6600160a060020a03600435166104f0565b604080519115158252519081900360200190f35b3480156101c657600080fd5b506101d2600435610505565b604051808060200186815260200185600160a060020a0316600160a060020a0316815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561023d578181015183820152602001610225565b50505050905090810190601f16801561026a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561028857600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100c09436949293602493928401919081908401838280828437509497505084359550505050602090910135600160a060020a031690506105f0565b3480156102f257600080fd5b506102fb610723565b60408051918252519081900360200190f35b34801561031957600080fd5b506102fb610729565b34801561032e57600080fd5b506100c060043561072f565b60008054600160a060020a0316331461035257600080fd5b600580548390811061036057fe5b906000526020600020906005020190508060020160149054906101000a900460ff1615151561038e57600080fd5b6004546002900481600401541115156103a657600080fd5b60028101546001820154604051600160a060020a039092169181156108fc0291906000818181858888f193505050501580156103e6573d6000803e3d6000fd5b50600201805474ff000000000000000000000000000000000000000019167401000000000000000000000000000000000000000017905550565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b505050505081565b60015434116104b957600080fd5b336000908152600360205260409020805460ff19166001908117909155600480549091019055565b600054600160a060020a031681565b60036020526000908152604090205460ff1681565b600580548290811061051357fe5b60009182526020918290206005919091020180546040805160026001841615610100026000190190931692909204601f8101859004850283018501909152808252919350918391908301828280156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b505050506001830154600284015460049094015492939092600160a060020a03821692507401000000000000000000000000000000000000000090910460ff169085565b6105f86107b9565b600054600160a060020a0316331461060f57600080fd5b506040805160a0810182528481526020808201859052600160a060020a038416928201929092526000606082018190526080820181905260058054600181018083559282905283518051949593948694929093027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0019261069392849201906107f4565b5060208201516001820155604082015160028201805460608501511515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1990921691909117929092169190911790556080909101516004909101555050505050565b60015481565b60045481565b3360009081526003602052604081205460ff16151561074d57600080fd5b600580548390811061075b57fe5b600091825260208083203384526003600590930201918201905260409091205490915060ff161561078b57600080fd5b3360009081526003820160205260409020805460ff1916600190811790915560049091018054909101905550565b60a06040519081016040528060608152602001600081526020016000600160a060020a03168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061083557805160ff1916838001178555610862565b82800160010185558215610862579182015b82811115610862578251825591602001919060010190610847565b5061086e929150610872565b5090565b61088c91905b8082111561086e5760008155600101610878565b905600a165627a7a72305820096da120849503e62ac002d6d0429708c2702ea899e6384e3c0fe59bb34d1cba0029a165627a7a72305820eacc299333dc2026f270b3c5a3b8bc5f13ce5db03e3b34c6cbb0ab50e9c9c0090029","sourceMap":"150:735:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;150:735:0;;;;;;;","deployedSourceMap":"150:735:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;207:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;207:26:0;;;;;;;;;;;;;;;;;;;;;;;;474:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;474:253:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;474:253:0;;-1:-1:-1;474:253:0;;-1:-1:-1;;;;;;;474:253:0;;;786:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;786:97:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;786:97:0;;;;;;;;;;;;;;;;;207:26;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;207:26:0;:::o;474:253::-;557:19;608:10;632:15;661:11;579:103;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;579:103:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;693:9:0;27:10:-1;;39:1;23:18;;45:23;;693:27:0;;;;;;;-1:-1:-1;;693:27:0;;;;;;;;;;;;-1:-1:-1;;;474:253:0:o;786:97::-;839:9;867;860:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;786:97;:::o;150:735::-;;;;;;;;;;:::o","source":"pragma solidity ^0.4.25;\n\nimport \"./CrowdCollab.sol\";\n\n/**\n* @dev Campaign Factory contract to generate Crowdfund smart contract to run Crowd fund\n*/\ncontract CampaignCreator {\n\n    // list of campaigns\n    address[] public campaigns;\n    \n    /**\n    * @dev Create new campaign and send default manager is caller\n    * @param minContribution minimum money can contribute for project (in ETH)\n    * @param description description of campaign, purpose of campaign\n    */\n    function createCampaign(uint minContribution, string description) public {\n        address newCampaign = new CrowdCollab(\n            msg.sender,\n            minContribution,\n            description\n        );\n\n        campaigns.push(newCampaign);\n    }\n\n    /**\n    * @dev get all deployed campaigns\n    */\n    function getDeployedCampaigns() public view returns (address[]) {\n        return campaigns;\n    }\n}\n","sourcePath":"/Data/projects/MPL/crowdfundsample/ethereum/contracts/CampaignCreator.sol","ast":{"absolutePath":"/Data/projects/MPL/crowdfundsample/ethereum/contracts/CampaignCreator.sol","exportedSymbols":{"CampaignCreator":[39]},"id":40,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".25"],"nodeType":"PragmaDirective","src":"0:24:0"},{"absolutePath":"/Data/projects/MPL/crowdfundsample/ethereum/contracts/CrowdCollab.sol","file":"./CrowdCollab.sol","id":2,"nodeType":"ImportDirective","scope":40,"sourceUnit":248,"src":"26:27:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[247],"contractKind":"contract","documentation":"@dev Campaign Factory contract to generate Crowdfund smart contract to run Crowd fund","fullyImplemented":true,"id":39,"linearizedBaseContracts":[39],"name":"CampaignCreator","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":5,"name":"campaigns","nodeType":"VariableDeclaration","scope":39,"src":"207:26:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":3,"name":"address","nodeType":"ElementaryTypeName","src":"207:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":4,"length":null,"nodeType":"ArrayTypeName","src":"207:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"body":{"id":28,"nodeType":"Block","src":"547:180:0","statements":[{"assignments":[13],"declarations":[{"constant":false,"id":13,"name":"newCampaign","nodeType":"VariableDeclaration","scope":29,"src":"557:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"557:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":21,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":16,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":262,"src":"608:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"608:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":18,"name":"minContribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7,"src":"632:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":19,"name":"description","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":9,"src":"661:11:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"579:15:0","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$_t_contract$_CrowdCollab_$247_$","typeString":"function (address,uint256,string memory) returns (contract CrowdCollab)"},"typeName":{"contractScope":null,"id":14,"name":"CrowdCollab","nodeType":"UserDefinedTypeName","referencedDeclaration":247,"src":"583:11:0","typeDescriptions":{"typeIdentifier":"t_contract$_CrowdCollab_$247","typeString":"contract CrowdCollab"}}},"id":20,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"579:103:0","typeDescriptions":{"typeIdentifier":"t_contract$_CrowdCollab_$247","typeString":"contract CrowdCollab"}},"nodeType":"VariableDeclarationStatement","src":"557:125:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":25,"name":"newCampaign","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"708:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":22,"name":"campaigns","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"693:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":24,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"693:14:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":26,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"693:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":27,"nodeType":"ExpressionStatement","src":"693:27:0"}]},"documentation":"@dev Create new campaign and send default manager is caller\n@param minContribution minimum money can contribute for project (in ETH)\n@param description description of campaign, purpose of campaign","id":29,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createCampaign","nodeType":"FunctionDefinition","parameters":{"id":10,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7,"name":"minContribution","nodeType":"VariableDeclaration","scope":29,"src":"498:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint","nodeType":"ElementaryTypeName","src":"498:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":9,"name":"description","nodeType":"VariableDeclaration","scope":29,"src":"520:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"520:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"497:42:0"},"payable":false,"returnParameters":{"id":11,"nodeType":"ParameterList","parameters":[],"src":"547:0:0"},"scope":39,"src":"474:253:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":37,"nodeType":"Block","src":"850:33:0","statements":[{"expression":{"argumentTypes":null,"id":35,"name":"campaigns","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"867:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":34,"id":36,"nodeType":"Return","src":"860:16:0"}]},"documentation":"@dev get all deployed campaigns","id":38,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getDeployedCampaigns","nodeType":"FunctionDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[],"src":"815:2:0"},"payable":false,"returnParameters":{"id":34,"nodeType":"ParameterList","parameters":[{"constant":false,"id":33,"name":"","nodeType":"VariableDeclaration","scope":38,"src":"839:9:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":31,"name":"address","nodeType":"ElementaryTypeName","src":"839:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":32,"length":null,"nodeType":"ArrayTypeName","src":"839:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"838:11:0"},"scope":39,"src":"786:97:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":40,"src":"150:735:0"}],"src":"0:886:0"},"legacyAST":{"absolutePath":"/Data/projects/MPL/crowdfundsample/ethereum/contracts/CampaignCreator.sol","exportedSymbols":{"CampaignCreator":[39]},"id":40,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".25"],"nodeType":"PragmaDirective","src":"0:24:0"},{"absolutePath":"/Data/projects/MPL/crowdfundsample/ethereum/contracts/CrowdCollab.sol","file":"./CrowdCollab.sol","id":2,"nodeType":"ImportDirective","scope":40,"sourceUnit":248,"src":"26:27:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[247],"contractKind":"contract","documentation":"@dev Campaign Factory contract to generate Crowdfund smart contract to run Crowd fund","fullyImplemented":true,"id":39,"linearizedBaseContracts":[39],"name":"CampaignCreator","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":5,"name":"campaigns","nodeType":"VariableDeclaration","scope":39,"src":"207:26:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":3,"name":"address","nodeType":"ElementaryTypeName","src":"207:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":4,"length":null,"nodeType":"ArrayTypeName","src":"207:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"body":{"id":28,"nodeType":"Block","src":"547:180:0","statements":[{"assignments":[13],"declarations":[{"constant":false,"id":13,"name":"newCampaign","nodeType":"VariableDeclaration","scope":29,"src":"557:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"557:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":21,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":16,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":262,"src":"608:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"608:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":18,"name":"minContribution","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7,"src":"632:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":19,"name":"description","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":9,"src":"661:11:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"579:15:0","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$_t_contract$_CrowdCollab_$247_$","typeString":"function (address,uint256,string memory) returns (contract CrowdCollab)"},"typeName":{"contractScope":null,"id":14,"name":"CrowdCollab","nodeType":"UserDefinedTypeName","referencedDeclaration":247,"src":"583:11:0","typeDescriptions":{"typeIdentifier":"t_contract$_CrowdCollab_$247","typeString":"contract CrowdCollab"}}},"id":20,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"579:103:0","typeDescriptions":{"typeIdentifier":"t_contract$_CrowdCollab_$247","typeString":"contract CrowdCollab"}},"nodeType":"VariableDeclarationStatement","src":"557:125:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":25,"name":"newCampaign","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":13,"src":"708:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":22,"name":"campaigns","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"693:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":24,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"693:14:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":26,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"693:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":27,"nodeType":"ExpressionStatement","src":"693:27:0"}]},"documentation":"@dev Create new campaign and send default manager is caller\n@param minContribution minimum money can contribute for project (in ETH)\n@param description description of campaign, purpose of campaign","id":29,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createCampaign","nodeType":"FunctionDefinition","parameters":{"id":10,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7,"name":"minContribution","nodeType":"VariableDeclaration","scope":29,"src":"498:20:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint","nodeType":"ElementaryTypeName","src":"498:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":9,"name":"description","nodeType":"VariableDeclaration","scope":29,"src":"520:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"520:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"497:42:0"},"payable":false,"returnParameters":{"id":11,"nodeType":"ParameterList","parameters":[],"src":"547:0:0"},"scope":39,"src":"474:253:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":37,"nodeType":"Block","src":"850:33:0","statements":[{"expression":{"argumentTypes":null,"id":35,"name":"campaigns","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"867:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":34,"id":36,"nodeType":"Return","src":"860:16:0"}]},"documentation":"@dev get all deployed campaigns","id":38,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getDeployedCampaigns","nodeType":"FunctionDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[],"src":"815:2:0"},"payable":false,"returnParameters":{"id":34,"nodeType":"ParameterList","parameters":[{"constant":false,"id":33,"name":"","nodeType":"VariableDeclaration","scope":38,"src":"839:9:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":31,"name":"address","nodeType":"ElementaryTypeName","src":"839:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":32,"length":null,"nodeType":"ArrayTypeName","src":"839:9:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"838:11:0"},"scope":39,"src":"786:97:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":40,"src":"150:735:0"}],"src":"0:886:0"},"compiler":{"name":"solc","version":"0.4.25+commit.59dbf8f1.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x6bfaae73411a3d9eef9a7f334238981ca811c09f","transactionHash":"0x3c0b045dd58591c8d66c6d2aee2c57cd369feb203def59f6799cdf0f09c56ec3"}},"schemaVersion":"2.0.2","updatedAt":"2019-02-01T04:14:42.928Z"};

/***/ }),

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_contracts_CampaignCreator_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/contracts/CampaignCreator.json */ "./ethereum/build/contracts/CampaignCreator.json");
var _build_contracts_CampaignCreator_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/contracts/CampaignCreator.json */ "./ethereum/build/contracts/CampaignCreator.json", 1);


var campaignFactoryAddress = "0x6bfaae73411a3d9eef9a7f334238981ca811c09f";
console.log("web3 version", _web3__WEBPACK_IMPORTED_MODULE_0__["default"].version);
var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_build_contracts_CampaignCreator_json__WEBPACK_IMPORTED_MODULE_1__.abi, campaignFactoryAddress);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3; // const network = "https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q";

var network = "http://localhost:7545";
console.log("WEb INIT");

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(network);
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

console.log(web3.defaultAccount);
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var CampaignIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(CampaignIndex, _Component);

  function CampaignIndex() {
    _classCallCheck(this, CampaignIndex);

    return _possibleConstructorReturn(this, _getPrototypeOf(CampaignIndex).apply(this, arguments));
  }

  _createClass(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            route: "/campaigns/".concat(address)
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "View Campaign")),
          fluid: true
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Open Campaigns"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        route: "/campaigns/new"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        floated: "right",
        content: "Create Campaign",
        icon: "add circle",
        primary: true
      }))), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var campaigns;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__["default"].methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", {
                  campaigns: campaigns
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });