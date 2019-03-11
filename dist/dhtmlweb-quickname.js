/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//create string for an object\n//not formatted well\nfunction namespace(obj, result, space) {\n    if (result.length === 0) {\n        result.push(\"{\");\n    }\n    const newSpace = space + \"  \";\n    for (let p in obj) {\n        if (typeof obj[p] === \"string\") {\n            result.push(newSpace + p + \": \" + obj[p] + \",\");\n        } else {\n            result.push(newSpace + p + \": {\");\n            namespace(obj[p], result, newSpace + \"  \");\n            result[result.length - 1] += \",\";\n        }\n    }\n    result.push(space + \"}\");\n}\n\nfunction quickname(paths, excludePrefix) {\n    const obj = {};\n    let importStr = [];\n    paths.forEach(path => {\n        let pathNames = path.split(\"/\");\n        //get rid of .js at the end\n        const name = pathNames[pathNames.length - 1].split(\".\")[0];\n        //use full name to keep it unique for supporting duplicate name\n        const fullName = pathNames.join(\"\").split(\".\").join(\"\");\n        importStr.push(`import ${fullName} from \"${path}\";`);\n\n        path = path.substr(excludePrefix.length || 0);\n        pathNames = path.split(\"/\");\n        pathNames.pop();\n        let current = obj;\n        pathNames.forEach(p => {\n            if (!current[p]) {\n                current[p] = {};\n            }\n            current = current[p];\n        });\n        current[name] = fullName;\n    });\n    console.log(obj);\n    const result = [];\n    namespace(obj, result, \"\");\n    return importStr.join(\"\\n\") + \"\\nexport default\\n \" + result.join(\"\\n\");\n}\n\nmodule.exports = quickname;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });