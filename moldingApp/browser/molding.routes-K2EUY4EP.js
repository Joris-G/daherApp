import {
  CoreService,
  DateHeurePipe,
  KitService,
  MoldingService
} from "./chunk-OJQZNTLX.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatCommonModule,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  coerceBooleanProperty
} from "./chunk-LYGF4RF7.js";
import {
  RoleGuard,
  ToolService
} from "./chunk-H3Z2WW5W.js";
import {
  TitleService
} from "./chunk-FHAETXHK.js";
import {
  ActivatedRoute,
  AlertController,
  AsyncPipe,
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  FormBuilder,
  FormControl,
  FormsModule,
  Injectable,
  Input,
  IonicModule,
  JsonPipe,
  LoadingService,
  ModalController,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  ReactiveFormsModule,
  RequestService,
  Router,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  core_exports,
  environment,
  from,
  inject,
  of,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-BEQVXJQK.js";
import "./chunk-RBMTPJHM.js";
import "./chunk-H7W7X3R4.js";
import "./chunk-TDOPS5CM.js";
import "./chunk-X6EMILF7.js";
import "./chunk-MQYPXGMY.js";
import "./chunk-ZXVPTCFE.js";
import "./chunk-N62YNSN6.js";
import "./chunk-7NJN3V7Z.js";
import "./chunk-MRNFMTOE.js";
import "./chunk-Y3MEIMOS.js";
import "./chunk-TIFPZGYV.js";
import "./chunk-LQHD5MTS.js";
import "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-ADHYLI4F.js";
import "./chunk-YSZWGYJT.js";
import "./chunk-AQO6FLE6.js";
import "./chunk-ZDAGMJPI.js";
import "./chunk-YAWL7G5N.js";
import "./chunk-NQLFRXVY.js";
import "./chunk-MC7HW2GL.js";
import "./chunk-XXAR46UN.js";
import "./chunk-MA6SXHYC.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-B3DYXOBH.js";

// node_modules/jsbarcode/bin/barcodes/Barcode.js
var require_Barcode = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/Barcode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Barcode = function Barcode2(data, options) {
      _classCallCheck(this, Barcode2);
      this.data = data;
      this.text = options.text || data;
      this.options = options;
    };
    exports.default = Barcode;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE39/index.js
var require_CODE39 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE39/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CODE39 = void 0;
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE39 = function(_Barcode) {
      _inherits(CODE392, _Barcode);
      function CODE392(data, options) {
        _classCallCheck(this, CODE392);
        data = data.toUpperCase();
        if (options.mod43) {
          data += getCharacter(mod43checksum(data));
        }
        return _possibleConstructorReturn(this, (CODE392.__proto__ || Object.getPrototypeOf(CODE392)).call(this, data, options));
      }
      _createClass(CODE392, [{
        key: "encode",
        value: function encode() {
          var result = getEncoding("*");
          for (var i = 0; i < this.data.length; i++) {
            result += getEncoding(this.data[i]) + "0";
          }
          result += getEncoding("*");
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
        }
      }]);
      return CODE392;
    }(_Barcode3.default);
    var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];
    var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
    function getEncoding(character) {
      return getBinary(characterValue(character));
    }
    function getBinary(characterValue2) {
      return encodings[characterValue2].toString(2);
    }
    function getCharacter(characterValue2) {
      return characters[characterValue2];
    }
    function characterValue(character) {
      return characters.indexOf(character);
    }
    function mod43checksum(data) {
      var checksum = 0;
      for (var i = 0; i < data.length; i++) {
        checksum += characterValue(data[i]);
      }
      checksum = checksum % 43;
      return checksum;
    }
    exports.CODE39 = CODE39;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/constants.js
var require_constants = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _SET_BY_CODE;
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SET_A = exports.SET_A = 0;
    var SET_B = exports.SET_B = 1;
    var SET_C = exports.SET_C = 2;
    var SHIFT = exports.SHIFT = 98;
    var START_A = exports.START_A = 103;
    var START_B = exports.START_B = 104;
    var START_C = exports.START_C = 105;
    var MODULO = exports.MODULO = 103;
    var STOP = exports.STOP = 106;
    var FNC1 = exports.FNC1 = 207;
    var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);
    var SWAP = exports.SWAP = {
      101: SET_A,
      100: SET_B,
      99: SET_C
    };
    var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208);
    var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209);
    var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210);
    var A_CHARS = exports.A_CHARS = "[\0-_\xC8-\xCF]";
    var B_CHARS = exports.B_CHARS = "[ -\x7F\xC8-\xCF]";
    var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";
    var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js
var require_CODE128 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE128 = function(_Barcode) {
      _inherits(CODE1282, _Barcode);
      function CODE1282(data, options) {
        _classCallCheck(this, CODE1282);
        var _this = _possibleConstructorReturn(this, (CODE1282.__proto__ || Object.getPrototypeOf(CODE1282)).call(this, data.substring(1), options));
        _this.bytes = data.split("").map(function(char) {
          return char.charCodeAt(0);
        });
        return _this;
      }
      _createClass(CODE1282, [{
        key: "valid",
        value: function valid() {
          return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
        }
        // The public encoding function
      }, {
        key: "encode",
        value: function encode() {
          var bytes = this.bytes;
          var startIndex = bytes.shift() - 105;
          var startSet = _constants.SET_BY_CODE[startIndex];
          if (startSet === void 0) {
            throw new RangeError("The encoding does not start with a start character.");
          }
          if (this.shouldEncodeAsEan128() === true) {
            bytes.unshift(_constants.FNC1);
          }
          var encodingResult = CODE1282.next(bytes, 1, startSet);
          return {
            text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
            data: (
              // Add the start bits
              CODE1282.getBar(startIndex) + // Add the encoded bits
              encodingResult.result + // Add the checksum
              CODE1282.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + // Add the end bits
              CODE1282.getBar(_constants.STOP)
            )
          };
        }
        // GS1-128/EAN-128
      }, {
        key: "shouldEncodeAsEan128",
        value: function shouldEncodeAsEan128() {
          var isEAN128 = this.options.ean128 || false;
          if (typeof isEAN128 === "string") {
            isEAN128 = isEAN128.toLowerCase() === "true";
          }
          return isEAN128;
        }
        // Get a bar symbol by index
      }], [{
        key: "getBar",
        value: function getBar(index) {
          return _constants.BARS[index] ? _constants.BARS[index].toString() : "";
        }
        // Correct an index by a set and shift it from the bytes array
      }, {
        key: "correctIndex",
        value: function correctIndex(bytes, set) {
          if (set === _constants.SET_A) {
            var charCode = bytes.shift();
            return charCode < 32 ? charCode + 64 : charCode - 32;
          } else if (set === _constants.SET_B) {
            return bytes.shift() - 32;
          } else {
            return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
          }
        }
      }, {
        key: "next",
        value: function next(bytes, pos, set) {
          if (!bytes.length) {
            return {
              result: "",
              checksum: 0
            };
          }
          var nextCode = void 0, index = void 0;
          if (bytes[0] >= 200) {
            index = bytes.shift() - 105;
            var nextSet = _constants.SWAP[index];
            if (nextSet !== void 0) {
              nextCode = CODE1282.next(bytes, pos + 1, nextSet);
            } else {
              if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
                bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
              }
              nextCode = CODE1282.next(bytes, pos + 1, set);
            }
          } else {
            index = CODE1282.correctIndex(bytes, set);
            nextCode = CODE1282.next(bytes, pos + 1, set);
          }
          var enc = CODE1282.getBar(index);
          var weight = index * pos;
          return {
            result: enc + nextCode.result,
            checksum: weight + nextCode.checksum
          };
        }
      }]);
      return CODE1282;
    }(_Barcode3.default);
    exports.default = CODE128;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/auto.js
var require_auto = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/auto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _constants = require_constants();
    var matchSetALength = function matchSetALength2(string) {
      return string.match(new RegExp("^" + _constants.A_CHARS + "*"))[0].length;
    };
    var matchSetBLength = function matchSetBLength2(string) {
      return string.match(new RegExp("^" + _constants.B_CHARS + "*"))[0].length;
    };
    var matchSetC = function matchSetC2(string) {
      return string.match(new RegExp("^" + _constants.C_CHARS + "*"))[0];
    };
    function autoSelectFromAB(string, isA) {
      var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
      var untilC = string.match(new RegExp("^(" + ranges + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
      if (untilC) {
        return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
      }
      var chars = string.match(new RegExp("^" + ranges + "+"))[0];
      if (chars.length === string.length) {
        return string;
      }
      return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
    }
    function autoSelectFromC(string) {
      var cMatch = matchSetC(string);
      var length = cMatch.length;
      if (length === string.length) {
        return string;
      }
      string = string.substring(length);
      var isA = matchSetALength(string) >= matchSetBLength(string);
      return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
    }
    exports.default = function(string) {
      var newString = void 0;
      var cLength = matchSetC(string).length;
      if (cLength >= 2) {
        newString = _constants.C_START_CHAR + autoSelectFromC(string);
      } else {
        var isA = matchSetALength(string) > matchSetBLength(string);
        newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
      }
      return newString.replace(
        /[\xCD\xCE]([^])[\xCD\xCE]/,
        // Any sequence between 205 and 206 characters
        function(match, char) {
          return String.fromCharCode(203) + char;
        }
      );
    };
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js
var require_CODE128_AUTO = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _CODE2 = require_CODE128();
    var _CODE3 = _interopRequireDefault(_CODE2);
    var _auto = require_auto();
    var _auto2 = _interopRequireDefault(_auto);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE128AUTO = function(_CODE) {
      _inherits(CODE128AUTO2, _CODE);
      function CODE128AUTO2(data, options) {
        _classCallCheck(this, CODE128AUTO2);
        if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
          var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, (0, _auto2.default)(data), options));
        } else {
          var _this = _possibleConstructorReturn(this, (CODE128AUTO2.__proto__ || Object.getPrototypeOf(CODE128AUTO2)).call(this, data, options));
        }
        return _possibleConstructorReturn(_this);
      }
      return CODE128AUTO2;
    }(_CODE3.default);
    exports.default = CODE128AUTO;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js
var require_CODE128A = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _CODE2 = require_CODE128();
    var _CODE3 = _interopRequireDefault(_CODE2);
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE128A = function(_CODE) {
      _inherits(CODE128A2, _CODE);
      function CODE128A2(string, options) {
        _classCallCheck(this, CODE128A2);
        return _possibleConstructorReturn(this, (CODE128A2.__proto__ || Object.getPrototypeOf(CODE128A2)).call(this, _constants.A_START_CHAR + string, options));
      }
      _createClass(CODE128A2, [{
        key: "valid",
        value: function valid() {
          return new RegExp("^" + _constants.A_CHARS + "+$").test(this.data);
        }
      }]);
      return CODE128A2;
    }(_CODE3.default);
    exports.default = CODE128A;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js
var require_CODE128B = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _CODE2 = require_CODE128();
    var _CODE3 = _interopRequireDefault(_CODE2);
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE128B = function(_CODE) {
      _inherits(CODE128B2, _CODE);
      function CODE128B2(string, options) {
        _classCallCheck(this, CODE128B2);
        return _possibleConstructorReturn(this, (CODE128B2.__proto__ || Object.getPrototypeOf(CODE128B2)).call(this, _constants.B_START_CHAR + string, options));
      }
      _createClass(CODE128B2, [{
        key: "valid",
        value: function valid() {
          return new RegExp("^" + _constants.B_CHARS + "+$").test(this.data);
        }
      }]);
      return CODE128B2;
    }(_CODE3.default);
    exports.default = CODE128B;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js
var require_CODE128C = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _CODE2 = require_CODE128();
    var _CODE3 = _interopRequireDefault(_CODE2);
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE128C = function(_CODE) {
      _inherits(CODE128C2, _CODE);
      function CODE128C2(string, options) {
        _classCallCheck(this, CODE128C2);
        return _possibleConstructorReturn(this, (CODE128C2.__proto__ || Object.getPrototypeOf(CODE128C2)).call(this, _constants.C_START_CHAR + string, options));
      }
      _createClass(CODE128C2, [{
        key: "valid",
        value: function valid() {
          return new RegExp("^" + _constants.C_CHARS + "+$").test(this.data);
        }
      }]);
      return CODE128C2;
    }(_CODE3.default);
    exports.default = CODE128C;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE128/index.js
var require_CODE1282 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE128/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = void 0;
    var _CODE128_AUTO = require_CODE128_AUTO();
    var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);
    var _CODE128A = require_CODE128A();
    var _CODE128A2 = _interopRequireDefault(_CODE128A);
    var _CODE128B = require_CODE128B();
    var _CODE128B2 = _interopRequireDefault(_CODE128B);
    var _CODE128C = require_CODE128C();
    var _CODE128C2 = _interopRequireDefault(_CODE128C);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.CODE128 = _CODE128_AUTO2.default;
    exports.CODE128A = _CODE128A2.default;
    exports.CODE128B = _CODE128B2.default;
    exports.CODE128C = _CODE128C2.default;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js
var require_constants2 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SIDE_BIN = exports.SIDE_BIN = "101";
    var MIDDLE_BIN = exports.MIDDLE_BIN = "01010";
    var BINARIES = exports.BINARIES = {
      "L": [
        // The L (left) type of encoding
        "0001101",
        "0011001",
        "0010011",
        "0111101",
        "0100011",
        "0110001",
        "0101111",
        "0111011",
        "0110111",
        "0001011"
      ],
      "G": [
        // The G type of encoding
        "0100111",
        "0110011",
        "0011011",
        "0100001",
        "0011101",
        "0111001",
        "0000101",
        "0010001",
        "0001001",
        "0010111"
      ],
      "R": [
        // The R (right) type of encoding
        "1110010",
        "1100110",
        "1101100",
        "1000010",
        "1011100",
        "1001110",
        "1010000",
        "1000100",
        "1001000",
        "1110100"
      ],
      "O": [
        // The O (odd) encoding for UPC-E
        "0001101",
        "0011001",
        "0010011",
        "0111101",
        "0100011",
        "0110001",
        "0101111",
        "0111011",
        "0110111",
        "0001011"
      ],
      "E": [
        // The E (even) encoding for UPC-E
        "0100111",
        "0110011",
        "0011011",
        "0100001",
        "0011101",
        "0111001",
        "0000101",
        "0010001",
        "0001001",
        "0010111"
      ]
    };
    var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
    var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"];
    var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js
var require_encoder = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _constants = require_constants2();
    var encode = function encode2(data, structure, separator) {
      var encoded = data.split("").map(function(val, idx) {
        return _constants.BINARIES[structure[idx]];
      }).map(function(val, idx) {
        return val ? val[data[idx]] : "";
      });
      if (separator) {
        var last = data.length - 1;
        encoded = encoded.map(function(val, idx) {
          return idx < last ? val + separator : val;
        });
      }
      return encoded.join("");
    };
    exports.default = encode;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js
var require_EAN = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _constants = require_constants2();
    var _encoder = require_encoder();
    var _encoder2 = _interopRequireDefault(_encoder);
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var EAN = function(_Barcode) {
      _inherits(EAN2, _Barcode);
      function EAN2(data, options) {
        _classCallCheck(this, EAN2);
        var _this = _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
        _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;
        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }
      _createClass(EAN2, [{
        key: "encode",
        value: function encode() {
          return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
        }
      }, {
        key: "leftText",
        value: function leftText(from2, to) {
          return this.text.substr(from2, to);
        }
      }, {
        key: "leftEncode",
        value: function leftEncode(data, structure) {
          return (0, _encoder2.default)(data, structure);
        }
      }, {
        key: "rightText",
        value: function rightText(from2, to) {
          return this.text.substr(from2, to);
        }
      }, {
        key: "rightEncode",
        value: function rightEncode(data, structure) {
          return (0, _encoder2.default)(data, structure);
        }
      }, {
        key: "encodeGuarded",
        value: function encodeGuarded() {
          var textOptions = {
            fontSize: this.fontSize
          };
          var guardOptions = {
            height: this.guardHeight
          };
          return [{
            data: _constants.SIDE_BIN,
            options: guardOptions
          }, {
            data: this.leftEncode(),
            text: this.leftText(),
            options: textOptions
          }, {
            data: _constants.MIDDLE_BIN,
            options: guardOptions
          }, {
            data: this.rightEncode(),
            text: this.rightText(),
            options: textOptions
          }, {
            data: _constants.SIDE_BIN,
            options: guardOptions
          }];
        }
      }, {
        key: "encodeFlat",
        value: function encodeFlat() {
          var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
          return {
            data: data.join(""),
            text: this.text
          };
        }
      }]);
      return EAN2;
    }(_Barcode3.default);
    exports.default = EAN;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js
var require_EAN13 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return void 0;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    };
    var _constants = require_constants2();
    var _EAN2 = require_EAN();
    var _EAN3 = _interopRequireDefault(_EAN2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var checksum = function checksum2(number) {
      var res = number.substr(0, 12).split("").map(function(n) {
        return +n;
      }).reduce(function(sum, a, idx) {
        return idx % 2 ? sum + a * 3 : sum + a;
      }, 0);
      return (10 - res % 10) % 10;
    };
    var EAN13 = function(_EAN) {
      _inherits(EAN132, _EAN);
      function EAN132(data, options) {
        _classCallCheck(this, EAN132);
        if (data.search(/^[0-9]{12}$/) !== -1) {
          data += checksum(data);
        }
        var _this = _possibleConstructorReturn(this, (EAN132.__proto__ || Object.getPrototypeOf(EAN132)).call(this, data, options));
        _this.lastChar = options.lastChar;
        return _this;
      }
      _createClass(EAN132, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
        }
      }, {
        key: "leftText",
        value: function leftText() {
          return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftText", this).call(this, 1, 6);
        }
      }, {
        key: "leftEncode",
        value: function leftEncode() {
          var data = this.data.substr(1, 6);
          var structure = _constants.EAN13_STRUCTURE[this.data[0]];
          return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "leftEncode", this).call(this, data, structure);
        }
      }, {
        key: "rightText",
        value: function rightText() {
          return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightText", this).call(this, 7, 6);
        }
      }, {
        key: "rightEncode",
        value: function rightEncode() {
          var data = this.data.substr(7, 6);
          return _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "rightEncode", this).call(this, data, "RRRRRR");
        }
        // The "standard" way of printing EAN13 barcodes with guard bars
      }, {
        key: "encodeGuarded",
        value: function encodeGuarded() {
          var data = _get(EAN132.prototype.__proto__ || Object.getPrototypeOf(EAN132.prototype), "encodeGuarded", this).call(this);
          if (this.options.displayValue) {
            data.unshift({
              data: "000000000000",
              text: this.text.substr(0, 1),
              options: {
                textAlign: "left",
                fontSize: this.fontSize
              }
            });
            if (this.options.lastChar) {
              data.push({
                data: "00"
              });
              data.push({
                data: "00000",
                text: this.options.lastChar,
                options: {
                  fontSize: this.fontSize
                }
              });
            }
          }
          return data;
        }
      }]);
      return EAN132;
    }(_EAN3.default);
    exports.default = EAN13;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js
var require_EAN8 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return void 0;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    };
    var _EAN2 = require_EAN();
    var _EAN3 = _interopRequireDefault(_EAN2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var checksum = function checksum2(number) {
      var res = number.substr(0, 7).split("").map(function(n) {
        return +n;
      }).reduce(function(sum, a, idx) {
        return idx % 2 ? sum + a : sum + a * 3;
      }, 0);
      return (10 - res % 10) % 10;
    };
    var EAN8 = function(_EAN) {
      _inherits(EAN82, _EAN);
      function EAN82(data, options) {
        _classCallCheck(this, EAN82);
        if (data.search(/^[0-9]{7}$/) !== -1) {
          data += checksum(data);
        }
        return _possibleConstructorReturn(this, (EAN82.__proto__ || Object.getPrototypeOf(EAN82)).call(this, data, options));
      }
      _createClass(EAN82, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
        }
      }, {
        key: "leftText",
        value: function leftText() {
          return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftText", this).call(this, 0, 4);
        }
      }, {
        key: "leftEncode",
        value: function leftEncode() {
          var data = this.data.substr(0, 4);
          return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "leftEncode", this).call(this, data, "LLLL");
        }
      }, {
        key: "rightText",
        value: function rightText() {
          return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightText", this).call(this, 4, 4);
        }
      }, {
        key: "rightEncode",
        value: function rightEncode() {
          var data = this.data.substr(4, 4);
          return _get(EAN82.prototype.__proto__ || Object.getPrototypeOf(EAN82.prototype), "rightEncode", this).call(this, data, "RRRR");
        }
      }]);
      return EAN82;
    }(_EAN3.default);
    exports.default = EAN8;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js
var require_EAN5 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _constants = require_constants2();
    var _encoder = require_encoder();
    var _encoder2 = _interopRequireDefault(_encoder);
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var checksum = function checksum2(data) {
      var result = data.split("").map(function(n) {
        return +n;
      }).reduce(function(sum, a, idx) {
        return idx % 2 ? sum + a * 9 : sum + a * 3;
      }, 0);
      return result % 10;
    };
    var EAN5 = function(_Barcode) {
      _inherits(EAN52, _Barcode);
      function EAN52(data, options) {
        _classCallCheck(this, EAN52);
        return _possibleConstructorReturn(this, (EAN52.__proto__ || Object.getPrototypeOf(EAN52)).call(this, data, options));
      }
      _createClass(EAN52, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{5}$/) !== -1;
        }
      }, {
        key: "encode",
        value: function encode() {
          var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
          return {
            data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
            text: this.text
          };
        }
      }]);
      return EAN52;
    }(_Barcode3.default);
    exports.default = EAN5;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js
var require_EAN2 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _constants = require_constants2();
    var _encoder = require_encoder();
    var _encoder2 = _interopRequireDefault(_encoder);
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var EAN2 = function(_Barcode) {
      _inherits(EAN22, _Barcode);
      function EAN22(data, options) {
        _classCallCheck(this, EAN22);
        return _possibleConstructorReturn(this, (EAN22.__proto__ || Object.getPrototypeOf(EAN22)).call(this, data, options));
      }
      _createClass(EAN22, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{2}$/) !== -1;
        }
      }, {
        key: "encode",
        value: function encode() {
          var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
          return {
            // Start bits + Encode the two digits with 01 in between
            data: "1011" + (0, _encoder2.default)(this.data, structure, "01"),
            text: this.text
          };
        }
      }]);
      return EAN22;
    }(_Barcode3.default);
    exports.default = EAN2;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js
var require_UPC = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    exports.checksum = checksum;
    var _encoder = require_encoder();
    var _encoder2 = _interopRequireDefault(_encoder);
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var UPC = function(_Barcode) {
      _inherits(UPC2, _Barcode);
      function UPC2(data, options) {
        _classCallCheck(this, UPC2);
        if (data.search(/^[0-9]{11}$/) !== -1) {
          data += checksum(data);
        }
        var _this = _possibleConstructorReturn(this, (UPC2.__proto__ || Object.getPrototypeOf(UPC2)).call(this, data, options));
        _this.displayValue = options.displayValue;
        if (options.fontSize > options.width * 10) {
          _this.fontSize = options.width * 10;
        } else {
          _this.fontSize = options.fontSize;
        }
        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }
      _createClass(UPC2, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
        }
      }, {
        key: "encode",
        value: function encode() {
          if (this.options.flat) {
            return this.flatEncoding();
          } else {
            return this.guardedEncoding();
          }
        }
      }, {
        key: "flatEncoding",
        value: function flatEncoding() {
          var result = "";
          result += "101";
          result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
          result += "01010";
          result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
          result += "101";
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "guardedEncoding",
        value: function guardedEncoding() {
          var result = [];
          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text.substr(0, 1),
              options: {
                textAlign: "left",
                fontSize: this.fontSize
              }
            });
          }
          result.push({
            data: "101" + (0, _encoder2.default)(this.data[0], "L"),
            options: {
              height: this.guardHeight
            }
          });
          result.push({
            data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
            text: this.text.substr(1, 5),
            options: {
              fontSize: this.fontSize
            }
          });
          result.push({
            data: "01010",
            options: {
              height: this.guardHeight
            }
          });
          result.push({
            data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
            text: this.text.substr(6, 5),
            options: {
              fontSize: this.fontSize
            }
          });
          result.push({
            data: (0, _encoder2.default)(this.data[11], "R") + "101",
            options: {
              height: this.guardHeight
            }
          });
          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text.substr(11, 1),
              options: {
                textAlign: "right",
                fontSize: this.fontSize
              }
            });
          }
          return result;
        }
      }]);
      return UPC2;
    }(_Barcode3.default);
    function checksum(number) {
      var result = 0;
      var i;
      for (i = 1; i < 11; i += 2) {
        result += parseInt(number[i]);
      }
      for (i = 0; i < 11; i += 2) {
        result += parseInt(number[i]) * 3;
      }
      return (10 - result % 10) % 10;
    }
    exports.default = UPC;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js
var require_UPCE = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _encoder = require_encoder();
    var _encoder2 = _interopRequireDefault(_encoder);
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    var _UPC = require_UPC();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
    var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];
    var UPCE = function(_Barcode) {
      _inherits(UPCE2, _Barcode);
      function UPCE2(data, options) {
        _classCallCheck(this, UPCE2);
        var _this = _possibleConstructorReturn(this, (UPCE2.__proto__ || Object.getPrototypeOf(UPCE2)).call(this, data, options));
        _this.isValid = false;
        if (data.search(/^[0-9]{6}$/) !== -1) {
          _this.middleDigits = data;
          _this.upcA = expandToUPCA(data, "0");
          _this.text = options.text || "" + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
          _this.isValid = true;
        } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
          _this.middleDigits = data.substring(1, data.length - 1);
          _this.upcA = expandToUPCA(_this.middleDigits, data[0]);
          if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
            _this.isValid = true;
          } else {
            return _possibleConstructorReturn(_this);
          }
        } else {
          return _possibleConstructorReturn(_this);
        }
        _this.displayValue = options.displayValue;
        if (options.fontSize > options.width * 10) {
          _this.fontSize = options.width * 10;
        } else {
          _this.fontSize = options.fontSize;
        }
        _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
        return _this;
      }
      _createClass(UPCE2, [{
        key: "valid",
        value: function valid() {
          return this.isValid;
        }
      }, {
        key: "encode",
        value: function encode() {
          if (this.options.flat) {
            return this.flatEncoding();
          } else {
            return this.guardedEncoding();
          }
        }
      }, {
        key: "flatEncoding",
        value: function flatEncoding() {
          var result = "";
          result += "101";
          result += this.encodeMiddleDigits();
          result += "010101";
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "guardedEncoding",
        value: function guardedEncoding() {
          var result = [];
          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text[0],
              options: {
                textAlign: "left",
                fontSize: this.fontSize
              }
            });
          }
          result.push({
            data: "101",
            options: {
              height: this.guardHeight
            }
          });
          result.push({
            data: this.encodeMiddleDigits(),
            text: this.text.substring(1, 7),
            options: {
              fontSize: this.fontSize
            }
          });
          result.push({
            data: "010101",
            options: {
              height: this.guardHeight
            }
          });
          if (this.displayValue) {
            result.push({
              data: "00000000",
              text: this.text[7],
              options: {
                textAlign: "right",
                fontSize: this.fontSize
              }
            });
          }
          return result;
        }
      }, {
        key: "encodeMiddleDigits",
        value: function encodeMiddleDigits() {
          var numberSystem = this.upcA[0];
          var checkDigit = this.upcA[this.upcA.length - 1];
          var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
          return (0, _encoder2.default)(this.middleDigits, parity);
        }
      }]);
      return UPCE2;
    }(_Barcode3.default);
    function expandToUPCA(middleDigits, numberSystem) {
      var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
      var expansion = EXPANSIONS[lastUpcE];
      var result = "";
      var digitIndex = 0;
      for (var i = 0; i < expansion.length; i++) {
        var c = expansion[i];
        if (c === "X") {
          result += middleDigits[digitIndex++];
        } else {
          result += c;
        }
      }
      result = "" + numberSystem + result;
      return "" + result + (0, _UPC.checksum)(result);
    }
    exports.default = UPCE;
  }
});

// node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js
var require_EAN_UPC = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = void 0;
    var _EAN = require_EAN13();
    var _EAN2 = _interopRequireDefault(_EAN);
    var _EAN3 = require_EAN8();
    var _EAN4 = _interopRequireDefault(_EAN3);
    var _EAN5 = require_EAN5();
    var _EAN6 = _interopRequireDefault(_EAN5);
    var _EAN7 = require_EAN2();
    var _EAN8 = _interopRequireDefault(_EAN7);
    var _UPC = require_UPC();
    var _UPC2 = _interopRequireDefault(_UPC);
    var _UPCE = require_UPCE();
    var _UPCE2 = _interopRequireDefault(_UPCE);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.EAN13 = _EAN2.default;
    exports.EAN8 = _EAN4.default;
    exports.EAN5 = _EAN6.default;
    exports.EAN2 = _EAN8.default;
    exports.UPC = _UPC2.default;
    exports.UPCE = _UPCE2.default;
  }
});

// node_modules/jsbarcode/bin/barcodes/ITF/constants.js
var require_constants3 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/ITF/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var START_BIN = exports.START_BIN = "1010";
    var END_BIN = exports.END_BIN = "11101";
    var BINARIES = exports.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
  }
});

// node_modules/jsbarcode/bin/barcodes/ITF/ITF.js
var require_ITF = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/ITF/ITF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _constants = require_constants3();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ITF = function(_Barcode) {
      _inherits(ITF2, _Barcode);
      function ITF2() {
        _classCallCheck(this, ITF2);
        return _possibleConstructorReturn(this, (ITF2.__proto__ || Object.getPrototypeOf(ITF2)).apply(this, arguments));
      }
      _createClass(ITF2, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^([0-9]{2})+$/) !== -1;
        }
      }, {
        key: "encode",
        value: function encode() {
          var _this2 = this;
          var encoded = this.data.match(/.{2}/g).map(function(pair) {
            return _this2.encodePair(pair);
          }).join("");
          return {
            data: _constants.START_BIN + encoded + _constants.END_BIN,
            text: this.text
          };
        }
        // Calculate the data of a number pair
      }, {
        key: "encodePair",
        value: function encodePair(pair) {
          var second = _constants.BINARIES[pair[1]];
          return _constants.BINARIES[pair[0]].split("").map(function(first, idx) {
            return (first === "1" ? "111" : "1") + (second[idx] === "1" ? "000" : "0");
          }).join("");
        }
      }]);
      return ITF2;
    }(_Barcode3.default);
    exports.default = ITF;
  }
});

// node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js
var require_ITF14 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _ITF2 = require_ITF();
    var _ITF3 = _interopRequireDefault(_ITF2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var checksum = function checksum2(data) {
      var res = data.substr(0, 13).split("").map(function(num) {
        return parseInt(num, 10);
      }).reduce(function(sum, n, idx) {
        return sum + n * (3 - idx % 2 * 2);
      }, 0);
      return Math.ceil(res / 10) * 10 - res;
    };
    var ITF14 = function(_ITF) {
      _inherits(ITF142, _ITF);
      function ITF142(data, options) {
        _classCallCheck(this, ITF142);
        if (data.search(/^[0-9]{13}$/) !== -1) {
          data += checksum(data);
        }
        return _possibleConstructorReturn(this, (ITF142.__proto__ || Object.getPrototypeOf(ITF142)).call(this, data, options));
      }
      _createClass(ITF142, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
        }
      }]);
      return ITF142;
    }(_ITF3.default);
    exports.default = ITF14;
  }
});

// node_modules/jsbarcode/bin/barcodes/ITF/index.js
var require_ITF2 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/ITF/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ITF14 = exports.ITF = void 0;
    var _ITF = require_ITF();
    var _ITF2 = _interopRequireDefault(_ITF);
    var _ITF3 = require_ITF14();
    var _ITF4 = _interopRequireDefault(_ITF3);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.ITF = _ITF2.default;
    exports.ITF14 = _ITF4.default;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/MSI.js
var require_MSI = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/MSI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MSI = function(_Barcode) {
      _inherits(MSI2, _Barcode);
      function MSI2(data, options) {
        _classCallCheck(this, MSI2);
        return _possibleConstructorReturn(this, (MSI2.__proto__ || Object.getPrototypeOf(MSI2)).call(this, data, options));
      }
      _createClass(MSI2, [{
        key: "encode",
        value: function encode() {
          var ret = "110";
          for (var i = 0; i < this.data.length; i++) {
            var digit = parseInt(this.data[i]);
            var bin = digit.toString(2);
            bin = addZeroes(bin, 4 - bin.length);
            for (var b = 0; b < bin.length; b++) {
              ret += bin[b] == "0" ? "100" : "110";
            }
          }
          ret += "1001";
          return {
            data: ret,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.data.search(/^[0-9]+$/) !== -1;
        }
      }]);
      return MSI2;
    }(_Barcode3.default);
    function addZeroes(number, n) {
      for (var i = 0; i < n; i++) {
        number = "0" + number;
      }
      return number;
    }
    exports.default = MSI;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/checksums.js
var require_checksums = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/checksums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mod10 = mod10;
    exports.mod11 = mod11;
    function mod10(number) {
      var sum = 0;
      for (var i = 0; i < number.length; i++) {
        var n = parseInt(number[i]);
        if ((i + number.length) % 2 === 0) {
          sum += n;
        } else {
          sum += n * 2 % 10 + Math.floor(n * 2 / 10);
        }
      }
      return (10 - sum % 10) % 10;
    }
    function mod11(number) {
      var sum = 0;
      var weights = [2, 3, 4, 5, 6, 7];
      for (var i = 0; i < number.length; i++) {
        var n = parseInt(number[number.length - 1 - i]);
        sum += weights[i % weights.length] * n;
      }
      return (11 - sum % 11) % 11;
    }
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js
var require_MSI10 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _MSI2 = require_MSI();
    var _MSI3 = _interopRequireDefault(_MSI2);
    var _checksums = require_checksums();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MSI10 = function(_MSI) {
      _inherits(MSI102, _MSI);
      function MSI102(data, options) {
        _classCallCheck(this, MSI102);
        return _possibleConstructorReturn(this, (MSI102.__proto__ || Object.getPrototypeOf(MSI102)).call(this, data + (0, _checksums.mod10)(data), options));
      }
      return MSI102;
    }(_MSI3.default);
    exports.default = MSI10;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js
var require_MSI11 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _MSI2 = require_MSI();
    var _MSI3 = _interopRequireDefault(_MSI2);
    var _checksums = require_checksums();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MSI11 = function(_MSI) {
      _inherits(MSI112, _MSI);
      function MSI112(data, options) {
        _classCallCheck(this, MSI112);
        return _possibleConstructorReturn(this, (MSI112.__proto__ || Object.getPrototypeOf(MSI112)).call(this, data + (0, _checksums.mod11)(data), options));
      }
      return MSI112;
    }(_MSI3.default);
    exports.default = MSI11;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js
var require_MSI1010 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _MSI2 = require_MSI();
    var _MSI3 = _interopRequireDefault(_MSI2);
    var _checksums = require_checksums();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MSI1010 = function(_MSI) {
      _inherits(MSI10102, _MSI);
      function MSI10102(data, options) {
        _classCallCheck(this, MSI10102);
        data += (0, _checksums.mod10)(data);
        data += (0, _checksums.mod10)(data);
        return _possibleConstructorReturn(this, (MSI10102.__proto__ || Object.getPrototypeOf(MSI10102)).call(this, data, options));
      }
      return MSI10102;
    }(_MSI3.default);
    exports.default = MSI1010;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js
var require_MSI1110 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _MSI2 = require_MSI();
    var _MSI3 = _interopRequireDefault(_MSI2);
    var _checksums = require_checksums();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MSI1110 = function(_MSI) {
      _inherits(MSI11102, _MSI);
      function MSI11102(data, options) {
        _classCallCheck(this, MSI11102);
        data += (0, _checksums.mod11)(data);
        data += (0, _checksums.mod10)(data);
        return _possibleConstructorReturn(this, (MSI11102.__proto__ || Object.getPrototypeOf(MSI11102)).call(this, data, options));
      }
      return MSI11102;
    }(_MSI3.default);
    exports.default = MSI1110;
  }
});

// node_modules/jsbarcode/bin/barcodes/MSI/index.js
var require_MSI2 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/MSI/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = void 0;
    var _MSI = require_MSI();
    var _MSI2 = _interopRequireDefault(_MSI);
    var _MSI3 = require_MSI10();
    var _MSI4 = _interopRequireDefault(_MSI3);
    var _MSI5 = require_MSI11();
    var _MSI6 = _interopRequireDefault(_MSI5);
    var _MSI7 = require_MSI1010();
    var _MSI8 = _interopRequireDefault(_MSI7);
    var _MSI9 = require_MSI1110();
    var _MSI10 = _interopRequireDefault(_MSI9);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.MSI = _MSI2.default;
    exports.MSI10 = _MSI4.default;
    exports.MSI11 = _MSI6.default;
    exports.MSI1010 = _MSI8.default;
    exports.MSI1110 = _MSI10.default;
  }
});

// node_modules/jsbarcode/bin/barcodes/pharmacode/index.js
var require_pharmacode = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/pharmacode/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pharmacode = void 0;
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var pharmacode = function(_Barcode) {
      _inherits(pharmacode2, _Barcode);
      function pharmacode2(data, options) {
        _classCallCheck(this, pharmacode2);
        var _this = _possibleConstructorReturn(this, (pharmacode2.__proto__ || Object.getPrototypeOf(pharmacode2)).call(this, data, options));
        _this.number = parseInt(data, 10);
        return _this;
      }
      _createClass(pharmacode2, [{
        key: "encode",
        value: function encode() {
          var z = this.number;
          var result = "";
          while (!isNaN(z) && z != 0) {
            if (z % 2 === 0) {
              result = "11100" + result;
              z = (z - 2) / 2;
            } else {
              result = "100" + result;
              z = (z - 1) / 2;
            }
          }
          result = result.slice(0, -2);
          return {
            data: result,
            text: this.text
          };
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.number >= 3 && this.number <= 131070;
        }
      }]);
      return pharmacode2;
    }(_Barcode3.default);
    exports.pharmacode = pharmacode;
  }
});

// node_modules/jsbarcode/bin/barcodes/codabar/index.js
var require_codabar = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/codabar/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.codabar = void 0;
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var codabar = function(_Barcode) {
      _inherits(codabar2, _Barcode);
      function codabar2(data, options) {
        _classCallCheck(this, codabar2);
        if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
          data = "A" + data + "A";
        }
        var _this = _possibleConstructorReturn(this, (codabar2.__proto__ || Object.getPrototypeOf(codabar2)).call(this, data.toUpperCase(), options));
        _this.text = _this.options.text || _this.text.replace(/[A-D]/g, "");
        return _this;
      }
      _createClass(codabar2, [{
        key: "valid",
        value: function valid() {
          return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
        }
      }, {
        key: "encode",
        value: function encode() {
          var result = [];
          var encodings = this.getEncodings();
          for (var i = 0; i < this.data.length; i++) {
            result.push(encodings[this.data.charAt(i)]);
            if (i !== this.data.length - 1) {
              result.push("0");
            }
          }
          return {
            text: this.text,
            data: result.join("")
          };
        }
      }, {
        key: "getEncodings",
        value: function getEncodings() {
          return {
            "0": "101010011",
            "1": "101011001",
            "2": "101001011",
            "3": "110010101",
            "4": "101101001",
            "5": "110101001",
            "6": "100101011",
            "7": "100101101",
            "8": "100110101",
            "9": "110100101",
            "-": "101001101",
            "$": "101100101",
            ":": "1101011011",
            "/": "1101101011",
            ".": "1101101101",
            "+": "1011011011",
            "A": "1011001001",
            "B": "1001001011",
            "C": "1010010011",
            "D": "1010011001"
          };
        }
      }]);
      return codabar2;
    }(_Barcode3.default);
    exports.codabar = codabar;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE93/constants.js
var require_constants4 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE93/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SYMBOLS = exports.SYMBOLS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "-",
      ".",
      " ",
      "$",
      "/",
      "+",
      "%",
      // Only used for csum and multi-symbols character encodings
      "($)",
      "(%)",
      "(/)",
      "(+)",
      // Start/Stop
      "\xFF"
    ];
    var BINARIES = exports.BINARIES = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"];
    var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
      "\0": ["(%)", "U"],
      "": ["($)", "A"],
      "": ["($)", "B"],
      "": ["($)", "C"],
      "": ["($)", "D"],
      "": ["($)", "E"],
      "": ["($)", "F"],
      "\x07": ["($)", "G"],
      "\b": ["($)", "H"],
      "	": ["($)", "I"],
      "\n": ["($)", "J"],
      "\v": ["($)", "K"],
      "\f": ["($)", "L"],
      "\r": ["($)", "M"],
      "": ["($)", "N"],
      "": ["($)", "O"],
      "": ["($)", "P"],
      "": ["($)", "Q"],
      "": ["($)", "R"],
      "": ["($)", "S"],
      "": ["($)", "T"],
      "": ["($)", "U"],
      "": ["($)", "V"],
      "": ["($)", "W"],
      "": ["($)", "X"],
      "": ["($)", "Y"],
      "": ["($)", "Z"],
      "\x1B": ["(%)", "A"],
      "": ["(%)", "B"],
      "": ["(%)", "C"],
      "": ["(%)", "D"],
      "": ["(%)", "E"],
      "!": ["(/)", "A"],
      '"': ["(/)", "B"],
      "#": ["(/)", "C"],
      "&": ["(/)", "F"],
      "'": ["(/)", "G"],
      "(": ["(/)", "H"],
      ")": ["(/)", "I"],
      "*": ["(/)", "J"],
      ",": ["(/)", "L"],
      ":": ["(/)", "Z"],
      ";": ["(%)", "F"],
      "<": ["(%)", "G"],
      "=": ["(%)", "H"],
      ">": ["(%)", "I"],
      "?": ["(%)", "J"],
      "@": ["(%)", "V"],
      "[": ["(%)", "K"],
      "\\": ["(%)", "L"],
      "]": ["(%)", "M"],
      "^": ["(%)", "N"],
      "_": ["(%)", "O"],
      "`": ["(%)", "W"],
      "a": ["(+)", "A"],
      "b": ["(+)", "B"],
      "c": ["(+)", "C"],
      "d": ["(+)", "D"],
      "e": ["(+)", "E"],
      "f": ["(+)", "F"],
      "g": ["(+)", "G"],
      "h": ["(+)", "H"],
      "i": ["(+)", "I"],
      "j": ["(+)", "J"],
      "k": ["(+)", "K"],
      "l": ["(+)", "L"],
      "m": ["(+)", "M"],
      "n": ["(+)", "N"],
      "o": ["(+)", "O"],
      "p": ["(+)", "P"],
      "q": ["(+)", "Q"],
      "r": ["(+)", "R"],
      "s": ["(+)", "S"],
      "t": ["(+)", "T"],
      "u": ["(+)", "U"],
      "v": ["(+)", "V"],
      "w": ["(+)", "W"],
      "x": ["(+)", "X"],
      "y": ["(+)", "Y"],
      "z": ["(+)", "Z"],
      "{": ["(%)", "P"],
      "|": ["(%)", "Q"],
      "}": ["(%)", "R"],
      "~": ["(%)", "S"],
      "\x7F": ["(%)", "T"]
    };
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js
var require_CODE93 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _constants = require_constants4();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE93 = function(_Barcode) {
      _inherits(CODE932, _Barcode);
      function CODE932(data, options) {
        _classCallCheck(this, CODE932);
        return _possibleConstructorReturn(this, (CODE932.__proto__ || Object.getPrototypeOf(CODE932)).call(this, data, options));
      }
      _createClass(CODE932, [{
        key: "valid",
        value: function valid() {
          return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
        }
      }, {
        key: "encode",
        value: function encode() {
          var symbols = this.data.split("").flatMap(function(c) {
            return _constants.MULTI_SYMBOLS[c] || c;
          });
          var encoded = symbols.map(function(s) {
            return CODE932.getEncoding(s);
          }).join("");
          var csumC = CODE932.checksum(symbols, 20);
          var csumK = CODE932.checksum(symbols.concat(csumC), 15);
          return {
            text: this.text,
            data: (
              // Add the start bits
              CODE932.getEncoding("\xFF") + // Add the encoded bits
              encoded + // Add the checksum
              CODE932.getEncoding(csumC) + CODE932.getEncoding(csumK) + // Add the stop bits
              CODE932.getEncoding("\xFF") + // Add the termination bit
              "1"
            )
          };
        }
        // Get the binary encoding of a symbol
      }], [{
        key: "getEncoding",
        value: function getEncoding(symbol) {
          return _constants.BINARIES[CODE932.symbolValue(symbol)];
        }
        // Get the symbol for a symbol value
      }, {
        key: "getSymbol",
        value: function getSymbol(symbolValue) {
          return _constants.SYMBOLS[symbolValue];
        }
        // Get the symbol value of a symbol
      }, {
        key: "symbolValue",
        value: function symbolValue(symbol) {
          return _constants.SYMBOLS.indexOf(symbol);
        }
        // Calculate a checksum symbol
      }, {
        key: "checksum",
        value: function checksum(symbols, maxWeight) {
          var csum = symbols.slice().reverse().reduce(function(sum, symbol, idx) {
            var weight = idx % maxWeight + 1;
            return sum + CODE932.symbolValue(symbol) * weight;
          }, 0);
          return CODE932.getSymbol(csum % 47);
        }
      }]);
      return CODE932;
    }(_Barcode3.default);
    exports.default = CODE93;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js
var require_CODE93FullASCII = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _CODE2 = require_CODE93();
    var _CODE3 = _interopRequireDefault(_CODE2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CODE93FullASCII = function(_CODE) {
      _inherits(CODE93FullASCII2, _CODE);
      function CODE93FullASCII2(data, options) {
        _classCallCheck(this, CODE93FullASCII2);
        return _possibleConstructorReturn(this, (CODE93FullASCII2.__proto__ || Object.getPrototypeOf(CODE93FullASCII2)).call(this, data, options));
      }
      _createClass(CODE93FullASCII2, [{
        key: "valid",
        value: function valid() {
          return /^[\x00-\x7f]+$/.test(this.data);
        }
      }]);
      return CODE93FullASCII2;
    }(_CODE3.default);
    exports.default = CODE93FullASCII;
  }
});

// node_modules/jsbarcode/bin/barcodes/CODE93/index.js
var require_CODE932 = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/CODE93/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CODE93FullASCII = exports.CODE93 = void 0;
    var _CODE = require_CODE93();
    var _CODE2 = _interopRequireDefault(_CODE);
    var _CODE93FullASCII = require_CODE93FullASCII();
    var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.CODE93 = _CODE2.default;
    exports.CODE93FullASCII = _CODE93FullASCII2.default;
  }
});

// node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js
var require_GenericBarcode = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GenericBarcode = void 0;
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Barcode2 = require_Barcode();
    var _Barcode3 = _interopRequireDefault(_Barcode2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var GenericBarcode = function(_Barcode) {
      _inherits(GenericBarcode2, _Barcode);
      function GenericBarcode2(data, options) {
        _classCallCheck(this, GenericBarcode2);
        return _possibleConstructorReturn(this, (GenericBarcode2.__proto__ || Object.getPrototypeOf(GenericBarcode2)).call(this, data, options));
      }
      _createClass(GenericBarcode2, [{
        key: "encode",
        value: function encode() {
          return {
            data: "10101010101010101010101010101010101010101",
            text: this.text
          };
        }
        // Resturn true/false if the string provided is valid for this encoder
      }, {
        key: "valid",
        value: function valid() {
          return true;
        }
      }]);
      return GenericBarcode2;
    }(_Barcode3.default);
    exports.GenericBarcode = GenericBarcode;
  }
});

// node_modules/jsbarcode/bin/barcodes/index.js
var require_barcodes = __commonJS({
  "node_modules/jsbarcode/bin/barcodes/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _CODE = require_CODE39();
    var _CODE2 = require_CODE1282();
    var _EAN_UPC = require_EAN_UPC();
    var _ITF = require_ITF2();
    var _MSI = require_MSI2();
    var _pharmacode = require_pharmacode();
    var _codabar = require_codabar();
    var _CODE3 = require_CODE932();
    var _GenericBarcode = require_GenericBarcode();
    exports.default = {
      CODE39: _CODE.CODE39,
      CODE128: _CODE2.CODE128,
      CODE128A: _CODE2.CODE128A,
      CODE128B: _CODE2.CODE128B,
      CODE128C: _CODE2.CODE128C,
      EAN13: _EAN_UPC.EAN13,
      EAN8: _EAN_UPC.EAN8,
      EAN5: _EAN_UPC.EAN5,
      EAN2: _EAN_UPC.EAN2,
      UPC: _EAN_UPC.UPC,
      UPCE: _EAN_UPC.UPCE,
      ITF14: _ITF.ITF14,
      ITF: _ITF.ITF,
      MSI: _MSI.MSI,
      MSI10: _MSI.MSI10,
      MSI11: _MSI.MSI11,
      MSI1010: _MSI.MSI1010,
      MSI1110: _MSI.MSI1110,
      pharmacode: _pharmacode.pharmacode,
      codabar: _codabar.codabar,
      CODE93: _CODE3.CODE93,
      CODE93FullASCII: _CODE3.CODE93FullASCII,
      GenericBarcode: _GenericBarcode.GenericBarcode
    };
  }
});

// node_modules/jsbarcode/bin/help/merge.js
var require_merge = __commonJS({
  "node_modules/jsbarcode/bin/help/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.default = function(old, replaceObj) {
      return _extends({}, old, replaceObj);
    };
  }
});

// node_modules/jsbarcode/bin/help/linearizeEncodings.js
var require_linearizeEncodings = __commonJS({
  "node_modules/jsbarcode/bin/help/linearizeEncodings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = linearizeEncodings;
    function linearizeEncodings(encodings) {
      var linearEncodings = [];
      function nextLevel(encoded) {
        if (Array.isArray(encoded)) {
          for (var i = 0; i < encoded.length; i++) {
            nextLevel(encoded[i]);
          }
        } else {
          encoded.text = encoded.text || "";
          encoded.data = encoded.data || "";
          linearEncodings.push(encoded);
        }
      }
      nextLevel(encodings);
      return linearEncodings;
    }
  }
});

// node_modules/jsbarcode/bin/help/fixOptions.js
var require_fixOptions = __commonJS({
  "node_modules/jsbarcode/bin/help/fixOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = fixOptions;
    function fixOptions(options) {
      options.marginTop = options.marginTop || options.margin;
      options.marginBottom = options.marginBottom || options.margin;
      options.marginRight = options.marginRight || options.margin;
      options.marginLeft = options.marginLeft || options.margin;
      return options;
    }
  }
});

// node_modules/jsbarcode/bin/help/optionsFromStrings.js
var require_optionsFromStrings = __commonJS({
  "node_modules/jsbarcode/bin/help/optionsFromStrings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = optionsFromStrings;
    function optionsFromStrings(options) {
      var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
      for (var intOption in intOptions) {
        if (intOptions.hasOwnProperty(intOption)) {
          intOption = intOptions[intOption];
          if (typeof options[intOption] === "string") {
            options[intOption] = parseInt(options[intOption], 10);
          }
        }
      }
      if (typeof options["displayValue"] === "string") {
        options["displayValue"] = options["displayValue"] != "false";
      }
      return options;
    }
  }
});

// node_modules/jsbarcode/bin/options/defaults.js
var require_defaults = __commonJS({
  "node_modules/jsbarcode/bin/options/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var defaults = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: true,
      fontOptions: "",
      font: "monospace",
      text: void 0,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      fontSize: 20,
      background: "#ffffff",
      lineColor: "#000000",
      margin: 10,
      marginTop: void 0,
      marginBottom: void 0,
      marginLeft: void 0,
      marginRight: void 0,
      valid: function valid() {
      }
    };
    exports.default = defaults;
  }
});

// node_modules/jsbarcode/bin/help/getOptionsFromElement.js
var require_getOptionsFromElement = __commonJS({
  "node_modules/jsbarcode/bin/help/getOptionsFromElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _optionsFromStrings = require_optionsFromStrings();
    var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
    var _defaults = require_defaults();
    var _defaults2 = _interopRequireDefault(_defaults);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function getOptionsFromElement(element) {
      var options = {};
      for (var property in _defaults2.default) {
        if (_defaults2.default.hasOwnProperty(property)) {
          if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
            options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
          }
          if (element.hasAttribute("data-" + property.toLowerCase())) {
            options[property] = element.getAttribute("data-" + property.toLowerCase());
          }
        }
      }
      options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");
      options = (0, _optionsFromStrings2.default)(options);
      return options;
    }
    exports.default = getOptionsFromElement;
  }
});

// node_modules/jsbarcode/bin/renderers/shared.js
var require_shared = __commonJS({
  "node_modules/jsbarcode/bin/renderers/shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = void 0;
    var _merge = require_merge();
    var _merge2 = _interopRequireDefault(_merge);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function getEncodingHeight(encoding, options) {
      return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
    }
    function getBarcodePadding(textWidth, barcodeWidth, options) {
      if (options.displayValue && barcodeWidth < textWidth) {
        if (options.textAlign == "center") {
          return Math.floor((textWidth - barcodeWidth) / 2);
        } else if (options.textAlign == "left") {
          return 0;
        } else if (options.textAlign == "right") {
          return Math.floor(textWidth - barcodeWidth);
        }
      }
      return 0;
    }
    function calculateEncodingAttributes(encodings, barcodeOptions, context) {
      for (var i = 0; i < encodings.length; i++) {
        var encoding = encodings[i];
        var options = (0, _merge2.default)(barcodeOptions, encoding.options);
        var textWidth;
        if (options.displayValue) {
          textWidth = messureText(encoding.text, options, context);
        } else {
          textWidth = 0;
        }
        var barcodeWidth = encoding.data.length * options.width;
        encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
        encoding.height = getEncodingHeight(encoding, options);
        encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
      }
    }
    function getTotalWidthOfEncodings(encodings) {
      var totalWidth = 0;
      for (var i = 0; i < encodings.length; i++) {
        totalWidth += encodings[i].width;
      }
      return totalWidth;
    }
    function getMaximumHeightOfEncodings(encodings) {
      var maxHeight = 0;
      for (var i = 0; i < encodings.length; i++) {
        if (encodings[i].height > maxHeight) {
          maxHeight = encodings[i].height;
        }
      }
      return maxHeight;
    }
    function messureText(string, options, context) {
      var ctx;
      if (context) {
        ctx = context;
      } else if (typeof document !== "undefined") {
        ctx = document.createElement("canvas").getContext("2d");
      } else {
        return 0;
      }
      ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;
      var measureTextResult = ctx.measureText(string);
      if (!measureTextResult) {
        return 0;
      }
      var size = measureTextResult.width;
      return size;
    }
    exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
    exports.getEncodingHeight = getEncodingHeight;
    exports.getBarcodePadding = getBarcodePadding;
    exports.calculateEncodingAttributes = calculateEncodingAttributes;
    exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;
  }
});

// node_modules/jsbarcode/bin/renderers/canvas.js
var require_canvas = __commonJS({
  "node_modules/jsbarcode/bin/renderers/canvas.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _merge = require_merge();
    var _merge2 = _interopRequireDefault(_merge);
    var _shared = require_shared();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CanvasRenderer = function() {
      function CanvasRenderer2(canvas, encodings, options) {
        _classCallCheck(this, CanvasRenderer2);
        this.canvas = canvas;
        this.encodings = encodings;
        this.options = options;
      }
      _createClass(CanvasRenderer2, [{
        key: "render",
        value: function render() {
          if (!this.canvas.getContext) {
            throw new Error("The browser does not support canvas.");
          }
          this.prepareCanvas();
          for (var i = 0; i < this.encodings.length; i++) {
            var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
            this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
            this.drawCanvasText(encodingOptions, this.encodings[i]);
            this.moveCanvasDrawing(this.encodings[i]);
          }
          this.restoreCanvas();
        }
      }, {
        key: "prepareCanvas",
        value: function prepareCanvas() {
          var ctx = this.canvas.getContext("2d");
          ctx.save();
          (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
          var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
          var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
          this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
          this.canvas.height = maxHeight;
          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          if (this.options.background) {
            ctx.fillStyle = this.options.background;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          }
          ctx.translate(this.options.marginLeft, 0);
        }
      }, {
        key: "drawCanvasBarcode",
        value: function drawCanvasBarcode(options, encoding) {
          var ctx = this.canvas.getContext("2d");
          var binary = encoding.data;
          var yFrom;
          if (options.textPosition == "top") {
            yFrom = options.marginTop + options.fontSize + options.textMargin;
          } else {
            yFrom = options.marginTop;
          }
          ctx.fillStyle = options.lineColor;
          for (var b = 0; b < binary.length; b++) {
            var x = b * options.width + encoding.barcodePadding;
            if (binary[b] === "1") {
              ctx.fillRect(x, yFrom, options.width, options.height);
            } else if (binary[b]) {
              ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
            }
          }
        }
      }, {
        key: "drawCanvasText",
        value: function drawCanvasText(options, encoding) {
          var ctx = this.canvas.getContext("2d");
          var font = options.fontOptions + " " + options.fontSize + "px " + options.font;
          if (options.displayValue) {
            var x, y;
            if (options.textPosition == "top") {
              y = options.marginTop + options.fontSize - options.textMargin;
            } else {
              y = options.height + options.textMargin + options.marginTop + options.fontSize;
            }
            ctx.font = font;
            if (options.textAlign == "left" || encoding.barcodePadding > 0) {
              x = 0;
              ctx.textAlign = "left";
            } else if (options.textAlign == "right") {
              x = encoding.width - 1;
              ctx.textAlign = "right";
            } else {
              x = encoding.width / 2;
              ctx.textAlign = "center";
            }
            ctx.fillText(encoding.text, x, y);
          }
        }
      }, {
        key: "moveCanvasDrawing",
        value: function moveCanvasDrawing(encoding) {
          var ctx = this.canvas.getContext("2d");
          ctx.translate(encoding.width, 0);
        }
      }, {
        key: "restoreCanvas",
        value: function restoreCanvas() {
          var ctx = this.canvas.getContext("2d");
          ctx.restore();
        }
      }]);
      return CanvasRenderer2;
    }();
    exports.default = CanvasRenderer;
  }
});

// node_modules/jsbarcode/bin/renderers/svg.js
var require_svg = __commonJS({
  "node_modules/jsbarcode/bin/renderers/svg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _merge = require_merge();
    var _merge2 = _interopRequireDefault(_merge);
    var _shared = require_shared();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var svgns = "http://www.w3.org/2000/svg";
    var SVGRenderer = function() {
      function SVGRenderer2(svg, encodings, options) {
        _classCallCheck(this, SVGRenderer2);
        this.svg = svg;
        this.encodings = encodings;
        this.options = options;
        this.document = options.xmlDocument || document;
      }
      _createClass(SVGRenderer2, [{
        key: "render",
        value: function render() {
          var currentX = this.options.marginLeft;
          this.prepareSVG();
          for (var i = 0; i < this.encodings.length; i++) {
            var encoding = this.encodings[i];
            var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
            var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
            this.setGroupOptions(group, encodingOptions);
            this.drawSvgBarcode(group, encodingOptions, encoding);
            this.drawSVGText(group, encodingOptions, encoding);
            currentX += encoding.width;
          }
        }
      }, {
        key: "prepareSVG",
        value: function prepareSVG() {
          while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
          }
          (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
          var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
          var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
          var width = totalWidth + this.options.marginLeft + this.options.marginRight;
          this.setSvgAttributes(width, maxHeight);
          if (this.options.background) {
            this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
          }
        }
      }, {
        key: "drawSvgBarcode",
        value: function drawSvgBarcode(parent, options, encoding) {
          var binary = encoding.data;
          var yFrom;
          if (options.textPosition == "top") {
            yFrom = options.fontSize + options.textMargin;
          } else {
            yFrom = 0;
          }
          var barWidth = 0;
          var x = 0;
          for (var b = 0; b < binary.length; b++) {
            x = b * options.width + encoding.barcodePadding;
            if (binary[b] === "1") {
              barWidth++;
            } else if (barWidth > 0) {
              this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
              barWidth = 0;
            }
          }
          if (barWidth > 0) {
            this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
          }
        }
      }, {
        key: "drawSVGText",
        value: function drawSVGText(parent, options, encoding) {
          var textElem = this.document.createElementNS(svgns, "text");
          if (options.displayValue) {
            var x, y;
            textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);
            if (options.textPosition == "top") {
              y = options.fontSize - options.textMargin;
            } else {
              y = options.height + options.textMargin + options.fontSize;
            }
            if (options.textAlign == "left" || encoding.barcodePadding > 0) {
              x = 0;
              textElem.setAttribute("text-anchor", "start");
            } else if (options.textAlign == "right") {
              x = encoding.width - 1;
              textElem.setAttribute("text-anchor", "end");
            } else {
              x = encoding.width / 2;
              textElem.setAttribute("text-anchor", "middle");
            }
            textElem.setAttribute("x", x);
            textElem.setAttribute("y", y);
            textElem.appendChild(this.document.createTextNode(encoding.text));
            parent.appendChild(textElem);
          }
        }
      }, {
        key: "setSvgAttributes",
        value: function setSvgAttributes(width, height) {
          var svg = this.svg;
          svg.setAttribute("width", width + "px");
          svg.setAttribute("height", height + "px");
          svg.setAttribute("x", "0px");
          svg.setAttribute("y", "0px");
          svg.setAttribute("viewBox", "0 0 " + width + " " + height);
          svg.setAttribute("xmlns", svgns);
          svg.setAttribute("version", "1.1");
          svg.setAttribute("style", "transform: translate(0,0)");
        }
      }, {
        key: "createGroup",
        value: function createGroup(x, y, parent) {
          var group = this.document.createElementNS(svgns, "g");
          group.setAttribute("transform", "translate(" + x + ", " + y + ")");
          parent.appendChild(group);
          return group;
        }
      }, {
        key: "setGroupOptions",
        value: function setGroupOptions(group, options) {
          group.setAttribute("style", "fill:" + options.lineColor + ";");
        }
      }, {
        key: "drawRect",
        value: function drawRect(x, y, width, height, parent) {
          var rect = this.document.createElementNS(svgns, "rect");
          rect.setAttribute("x", x);
          rect.setAttribute("y", y);
          rect.setAttribute("width", width);
          rect.setAttribute("height", height);
          parent.appendChild(rect);
          return rect;
        }
      }]);
      return SVGRenderer2;
    }();
    exports.default = SVGRenderer;
  }
});

// node_modules/jsbarcode/bin/renderers/object.js
var require_object = __commonJS({
  "node_modules/jsbarcode/bin/renderers/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ObjectRenderer = function() {
      function ObjectRenderer2(object, encodings, options) {
        _classCallCheck(this, ObjectRenderer2);
        this.object = object;
        this.encodings = encodings;
        this.options = options;
      }
      _createClass(ObjectRenderer2, [{
        key: "render",
        value: function render() {
          this.object.encodings = this.encodings;
        }
      }]);
      return ObjectRenderer2;
    }();
    exports.default = ObjectRenderer;
  }
});

// node_modules/jsbarcode/bin/renderers/index.js
var require_renderers = __commonJS({
  "node_modules/jsbarcode/bin/renderers/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _canvas = require_canvas();
    var _canvas2 = _interopRequireDefault(_canvas);
    var _svg = require_svg();
    var _svg2 = _interopRequireDefault(_svg);
    var _object = require_object();
    var _object2 = _interopRequireDefault(_object);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = {
      CanvasRenderer: _canvas2.default,
      SVGRenderer: _svg2.default,
      ObjectRenderer: _object2.default
    };
  }
});

// node_modules/jsbarcode/bin/exceptions/exceptions.js
var require_exceptions = __commonJS({
  "node_modules/jsbarcode/bin/exceptions/exceptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var InvalidInputException = function(_Error) {
      _inherits(InvalidInputException2, _Error);
      function InvalidInputException2(symbology, input) {
        _classCallCheck(this, InvalidInputException2);
        var _this = _possibleConstructorReturn(this, (InvalidInputException2.__proto__ || Object.getPrototypeOf(InvalidInputException2)).call(this));
        _this.name = "InvalidInputException";
        _this.symbology = symbology;
        _this.input = input;
        _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
        return _this;
      }
      return InvalidInputException2;
    }(Error);
    var InvalidElementException = function(_Error2) {
      _inherits(InvalidElementException2, _Error2);
      function InvalidElementException2() {
        _classCallCheck(this, InvalidElementException2);
        var _this2 = _possibleConstructorReturn(this, (InvalidElementException2.__proto__ || Object.getPrototypeOf(InvalidElementException2)).call(this));
        _this2.name = "InvalidElementException";
        _this2.message = "Not supported type to render on";
        return _this2;
      }
      return InvalidElementException2;
    }(Error);
    var NoElementException = function(_Error3) {
      _inherits(NoElementException2, _Error3);
      function NoElementException2() {
        _classCallCheck(this, NoElementException2);
        var _this3 = _possibleConstructorReturn(this, (NoElementException2.__proto__ || Object.getPrototypeOf(NoElementException2)).call(this));
        _this3.name = "NoElementException";
        _this3.message = "No element to render on.";
        return _this3;
      }
      return NoElementException2;
    }(Error);
    exports.InvalidInputException = InvalidInputException;
    exports.InvalidElementException = InvalidElementException;
    exports.NoElementException = NoElementException;
  }
});

// node_modules/jsbarcode/bin/help/getRenderProperties.js
var require_getRenderProperties = __commonJS({
  "node_modules/jsbarcode/bin/help/getRenderProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _getOptionsFromElement = require_getOptionsFromElement();
    var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);
    var _renderers = require_renderers();
    var _renderers2 = _interopRequireDefault(_renderers);
    var _exceptions = require_exceptions();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function getRenderProperties(element) {
      if (typeof element === "string") {
        return querySelectedRenderProperties(element);
      } else if (Array.isArray(element)) {
        var returnArray = [];
        for (var i = 0; i < element.length; i++) {
          returnArray.push(getRenderProperties(element[i]));
        }
        return returnArray;
      } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLImageElement) {
        return newCanvasRenderProperties(element);
      } else if (element && element.nodeName && element.nodeName.toLowerCase() === "svg" || typeof SVGElement !== "undefined" && element instanceof SVGElement) {
        return {
          element,
          options: (0, _getOptionsFromElement2.default)(element),
          renderer: _renderers2.default.SVGRenderer
        };
      } else if (typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLCanvasElement) {
        return {
          element,
          options: (0, _getOptionsFromElement2.default)(element),
          renderer: _renderers2.default.CanvasRenderer
        };
      } else if (element && element.getContext) {
        return {
          element,
          renderer: _renderers2.default.CanvasRenderer
        };
      } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && !element.nodeName) {
        return {
          element,
          renderer: _renderers2.default.ObjectRenderer
        };
      } else {
        throw new _exceptions.InvalidElementException();
      }
    }
    function querySelectedRenderProperties(string) {
      var selector = document.querySelectorAll(string);
      if (selector.length === 0) {
        return void 0;
      } else {
        var returnArray = [];
        for (var i = 0; i < selector.length; i++) {
          returnArray.push(getRenderProperties(selector[i]));
        }
        return returnArray;
      }
    }
    function newCanvasRenderProperties(imgElement) {
      var canvas = document.createElement("canvas");
      return {
        element: canvas,
        options: (0, _getOptionsFromElement2.default)(imgElement),
        renderer: _renderers2.default.CanvasRenderer,
        afterRender: function afterRender() {
          imgElement.setAttribute("src", canvas.toDataURL());
        }
      };
    }
    exports.default = getRenderProperties;
  }
});

// node_modules/jsbarcode/bin/exceptions/ErrorHandler.js
var require_ErrorHandler = __commonJS({
  "node_modules/jsbarcode/bin/exceptions/ErrorHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ErrorHandler = function() {
      function ErrorHandler2(api) {
        _classCallCheck(this, ErrorHandler2);
        this.api = api;
      }
      _createClass(ErrorHandler2, [{
        key: "handleCatch",
        value: function handleCatch(e) {
          if (e.name === "InvalidInputException") {
            if (this.api._options.valid !== this.api._defaults.valid) {
              this.api._options.valid(false);
            } else {
              throw e.message;
            }
          } else {
            throw e;
          }
          this.api.render = function() {
          };
        }
      }, {
        key: "wrapBarcodeCall",
        value: function wrapBarcodeCall(func) {
          try {
            var result = func.apply(void 0, arguments);
            this.api._options.valid(true);
            return result;
          } catch (e) {
            this.handleCatch(e);
            return this.api;
          }
        }
      }]);
      return ErrorHandler2;
    }();
    exports.default = ErrorHandler;
  }
});

// node_modules/jsbarcode/bin/JsBarcode.js
var require_JsBarcode = __commonJS({
  "node_modules/jsbarcode/bin/JsBarcode.js"(exports, module) {
    "use strict";
    var _barcodes = require_barcodes();
    var _barcodes2 = _interopRequireDefault(_barcodes);
    var _merge = require_merge();
    var _merge2 = _interopRequireDefault(_merge);
    var _linearizeEncodings = require_linearizeEncodings();
    var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);
    var _fixOptions = require_fixOptions();
    var _fixOptions2 = _interopRequireDefault(_fixOptions);
    var _getRenderProperties = require_getRenderProperties();
    var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);
    var _optionsFromStrings = require_optionsFromStrings();
    var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);
    var _ErrorHandler = require_ErrorHandler();
    var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);
    var _exceptions = require_exceptions();
    var _defaults = require_defaults();
    var _defaults2 = _interopRequireDefault(_defaults);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var API = function API2() {
    };
    var JsBarcode2 = function JsBarcode3(element, text, options) {
      var api = new API();
      if (typeof element === "undefined") {
        throw Error("No element to render on was provided.");
      }
      api._renderProperties = (0, _getRenderProperties2.default)(element);
      api._encodings = [];
      api._options = _defaults2.default;
      api._errorHandler = new _ErrorHandler2.default(api);
      if (typeof text !== "undefined") {
        options = options || {};
        if (!options.format) {
          options.format = autoSelectBarcode();
        }
        api.options(options)[options.format](text, options).render();
      }
      return api;
    };
    JsBarcode2.getModule = function(name2) {
      return _barcodes2.default[name2];
    };
    for (name in _barcodes2.default) {
      if (_barcodes2.default.hasOwnProperty(name)) {
        registerBarcode(_barcodes2.default, name);
      }
    }
    var name;
    function registerBarcode(barcodes, name2) {
      API.prototype[name2] = API.prototype[name2.toUpperCase()] = API.prototype[name2.toLowerCase()] = function(text, options) {
        var api = this;
        return api._errorHandler.wrapBarcodeCall(function() {
          options.text = typeof options.text === "undefined" ? void 0 : "" + options.text;
          var newOptions = (0, _merge2.default)(api._options, options);
          newOptions = (0, _optionsFromStrings2.default)(newOptions);
          var Encoder = barcodes[name2];
          var encoded = encode(text, Encoder, newOptions);
          api._encodings.push(encoded);
          return api;
        });
      };
    }
    function encode(text, Encoder, options) {
      text = "" + text;
      var encoder = new Encoder(text, options);
      if (!encoder.valid()) {
        throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
      }
      var encoded = encoder.encode();
      encoded = (0, _linearizeEncodings2.default)(encoded);
      for (var i = 0; i < encoded.length; i++) {
        encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
      }
      return encoded;
    }
    function autoSelectBarcode() {
      if (_barcodes2.default["CODE128"]) {
        return "CODE128";
      }
      return Object.keys(_barcodes2.default)[0];
    }
    API.prototype.options = function(options) {
      this._options = (0, _merge2.default)(this._options, options);
      return this;
    };
    API.prototype.blank = function(size) {
      var zeroes = new Array(size + 1).join("0");
      this._encodings.push({
        data: zeroes
      });
      return this;
    };
    API.prototype.init = function() {
      if (!this._renderProperties) {
        return;
      }
      if (!Array.isArray(this._renderProperties)) {
        this._renderProperties = [this._renderProperties];
      }
      var renderProperty;
      for (var i in this._renderProperties) {
        renderProperty = this._renderProperties[i];
        var options = (0, _merge2.default)(this._options, renderProperty.options);
        if (options.format == "auto") {
          options.format = autoSelectBarcode();
        }
        this._errorHandler.wrapBarcodeCall(function() {
          var text = options.value;
          var Encoder = _barcodes2.default[options.format.toUpperCase()];
          var encoded = encode(text, Encoder, options);
          render(renderProperty, encoded, options);
        });
      }
    };
    API.prototype.render = function() {
      if (!this._renderProperties) {
        throw new _exceptions.NoElementException();
      }
      if (Array.isArray(this._renderProperties)) {
        for (var i = 0; i < this._renderProperties.length; i++) {
          render(this._renderProperties[i], this._encodings, this._options);
        }
      } else {
        render(this._renderProperties, this._encodings, this._options);
      }
      return this;
    };
    API.prototype._defaults = _defaults2.default;
    function render(renderProperties, encodings, options) {
      encodings = (0, _linearizeEncodings2.default)(encodings);
      for (var i = 0; i < encodings.length; i++) {
        encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
        (0, _fixOptions2.default)(encodings[i].options);
      }
      (0, _fixOptions2.default)(options);
      var Renderer = renderProperties.renderer;
      var renderer = new Renderer(renderProperties.element, encodings, options);
      renderer.render();
      if (renderProperties.afterRender) {
        renderProperties.afterRender();
      }
    }
    if (typeof window !== "undefined") {
      window.JsBarcode = JsBarcode2;
    }
    if (typeof jQuery !== "undefined") {
      jQuery.fn.JsBarcode = function(content, options) {
        var elementArray = [];
        jQuery(this).each(function() {
          elementArray.push(this);
        });
        return JsBarcode2(elementArray, content, options);
      };
    }
    module.exports = JsBarcode2;
  }
});

// angular:jit:template:file:src\app\molding\pages\print-molding-sheet\print-molding-sheet.page.html
var print_molding_sheet_page_default = `<ion-header>\r
  <ion-toolbar>\r
    <ion-menu-button color="light" slot="start"></ion-menu-button>\r
    <ion-img slot="start" class="logo" src="assets/images/logoDaher.png" (click)="navigateHome()">\r
    </ion-img>\r
    <ion-title class="ion-align-center uppcase">Feuille de tra\xE7abilit\xE9 moulage</ion-title>\r
    <svg slot=end id="barcode"></svg>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content *ngIf="molding" [fullscreen]="true">\r
\r
  <div class="content-top ion-margin">\r
    <div>\r
      <ion-title color=primary>Informations</ion-title>\r
      <div class="flex-vertical">\r
        <ion-text>ID Moulage : {{molding.id}}</ion-text>\r
        <ion-text>Outillage :\r
          <span *ngIf="molding.outillage">{{molding.OT.sapToolNumber}} - {{molding.OT.designation}}</span>\r
          <span *ngIf="!molding.outillage">Pas d'outillage li\xE9 !</span>\r
        </ion-text>\r
        <ion-text>Date tra\xE7abilit\xE9 : {{molding.moldingDay | date:'dd/MM/yyyy'}}</ion-text>\r
        <ion-text>Fait par : {{molding.userCreat.username}} ({{molding.userCreat.matricule}})</ion-text>\r
        <ion-text *ngIf="molding.updatedAt">\r
          Date de mise \xE0 jour : {{molding.updatedAt | date: 'dd/MM/yyyy'}}\r
        </ion-text>\r
      </div>\r
    </div>\r
    <div>\r
      <ion-title color=danger>R\xE9capitulatif</ion-title>\r
      <div class="important">A draper avant le : {{molding.aDraperAv | date:'dd/MM/yyyy \xE0 HH:mm'}}</div>\r
      <div class="important">A polym\xE9riser avant le : {{molding.aCuireAv | date:'dd/MM/yyyy \xE0 HH:mm'}}</div>\r
    </div>\r
  </div>\r
\r
  <mat-divider></mat-divider>\r
\r
  <div class="kit-list ion-margin">\r
    <ion-title color=primary>Liste des kits ({{molding.kits.length}})</ion-title>\r
\r
    <table mat-table [dataSource]="dataSource">\r
      <!-- ID MM Column -->\r
      <ng-container matColumnDef="idMM">\r
        <th mat-header-cell *matHeaderCellDef> ID MM </th>\r
        <td mat-cell *matCellDef="let element"> {{element.idMM}} </td>\r
      </ng-container>\r
      <!-- REFERENCE SAP Column -->\r
      <ng-container matColumnDef="referenceSAP">\r
        <th mat-header-cell *matHeaderCellDef> R\xE9f\xE9rence SAP </th>\r
        <td mat-cell *matCellDef="let element"> {{element.referenceSAP}} </td>\r
      </ng-container>\r
      <!-- DESIGNATION Column -->\r
      <ng-container matColumnDef="designationSAP">\r
        <th mat-header-cell *matHeaderCellDef> D\xE9signation </th>\r
        <td mat-cell *matCellDef="let element"> {{element.designationSAP}} </td>\r
      </ng-container>\r
      <!-- PEREMPTION -18\xB0C Column -->\r
      <ng-container matColumnDef="peremptionMoins18">\r
        <th mat-header-cell *matHeaderCellDef> Date de p\xE9remption \xE0 -18\xB0C </th>\r
        <td mat-cell *matCellDef="let element"\r
          [style.color]="kitService.isPerim(element.peremptionMoins18, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'">\r
          {{element.peremptionMoins18 | date:'dd/MM/yyyy \xE0 HH:mm'}} </td>\r
      </ng-container>\r
      <!-- A DRAPER AVANT Column -->\r
      <ng-container matColumnDef="aDrapAv">\r
        <th mat-header-cell *matHeaderCellDef> A draper avant </th>\r
        <td mat-cell *matCellDef="let element"\r
          [style.color]="kitService.isPerim(element.aDrapAv, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'">\r
          {{element.aDrapAv | date:'dd/MM/yyyy \xE0 HH:mm'}} </td>\r
      </ng-container>\r
      <!-- A POLYMERISER AVANT Column -->\r
      <ng-container matColumnDef="aCuirAv">\r
        <th mat-header-cell *matHeaderCellDef> A polym avant </th>\r
        <td mat-cell *matCellDef="let element"\r
          [style.color]="kitService.isPerim(element.aCuirAv, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'">\r
          {{element.aCuirAv | date:'dd/MM/yyyy \xE0 HH:mm'}} </td>\r
      </ng-container>\r
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
      <tr mat-row *matRowDef="let kit; columns: displayedColumns;"></tr>\r
    </table>\r
  </div>\r
\r
  <mat-divider></mat-divider>\r
\r
  <div class="coreList ion-margin" *ngIf="molding.materialSupplementary.length > 0">\r
    <div class="title">Autres mat\xE9riaux ({{molding.materialSupplementary.length}})</div>\r
    <div class="list">\r
      <ion-item *ngFor="let mat of molding.materialSupplementary">\r
        <ion-label>{{mat.numLot | json}}</ion-label>\r
      </ion-item>\r
    </div>\r
  </div>\r
</ion-content>\r
`;

// angular:jit:style:file:src\app\molding\pages\print-molding-sheet\print-molding-sheet.page.scss
var print_molding_sheet_page_default2 = "/* src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.scss */\n.flex-vertical {\n  display: flex !important;\n  flex-direction: column;\n}\n.important {\n  size: 2em !important;\n  font-weight: bolder;\n}\nion-content {\n  font-size: 12px !important;\n}\nion-content ion-title {\n  padding-bottom: 1em !important;\n}\nion-content .kit-item {\n  margin: 0px 0;\n  font-size: 12px !important;\n}\nion-content .kit-item ion-label {\n  margin: 0 0;\n}\nion-content .kit-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content .kit-list ion-title {\n  align-self: flex-start;\n}\nion-content .title-default {\n  padding-inline: 0 !important;\n}\n.logo {\n  width: 100px;\n}\n.mat-table {\n  text-align: center;\n}\n.mat-row,\n.mat-header-row {\n  height: auto;\n}\n.mat-cell,\n.mat-header-cell {\n  padding: 8px;\n  font-size: 10px !important;\n}\n.content-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media print {\n  .print-hide {\n    display: none;\n  }\n}\n.uppcase {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=print-molding-sheet.page.css.map */\n";

// src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.ts
var import_jsbarcode = __toESM(require_JsBarcode());

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider = class _MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatDivider,
      deps: [],
      target: FactoryTarget.Component
    });
  }
  static {
    this.\u0275cmp = \u0275\u0275ngDeclareComponent({
      minVersion: "14.0.0",
      version: "18.2.0-next.2",
      type: _MatDivider,
      isStandalone: true,
      selector: "mat-divider",
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      host: {
        attributes: {
          "role": "separator"
        },
        properties: {
          "attr.aria-orientation": 'vertical ? "vertical" : "horizontal"',
          "class.mat-divider-vertical": "vertical",
          "class.mat-divider-horizontal": "!vertical",
          "class.mat-divider-inset": "inset"
        },
        classAttribute: "mat-divider"
      },
      ngImport: core_exports,
      template: "",
      isInline: true,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-app-outline));border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-app-outline));border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatDivider,
  decorators: [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-app-outline));border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-app-outline));border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }],
  propDecorators: {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  }
});
var MatDividerModule = class _MatDividerModule {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatDividerModule,
      deps: [],
      target: FactoryTarget.NgModule
    });
  }
  static {
    this.\u0275mod = \u0275\u0275ngDeclareNgModule({
      minVersion: "14.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatDividerModule,
      imports: [MatCommonModule, MatDivider],
      exports: [MatDivider, MatCommonModule]
    });
  }
  static {
    this.\u0275inj = \u0275\u0275ngDeclareInjector({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatDividerModule,
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatDividerModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatDivider],
      exports: [MatDivider, MatCommonModule]
    }]
  }]
});

// src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.ts
var PrintMoldingSheetPage = class PrintMoldingSheetPage2 {
  activatedRoute;
  moldingService;
  loadingService;
  router;
  kitService;
  molding;
  displayedColumns = ["idMM", "referenceSAP", "designationSAP", "peremptionMoins18", "aDrapAv", "aCuirAv"];
  dataSource;
  kitList;
  constructor(activatedRoute, moldingService, loadingService, router, kitService) {
    this.activatedRoute = activatedRoute;
    this.moldingService = moldingService;
    this.loadingService = loadingService;
    this.router = router;
    this.kitService = kitService;
  }
  ngOnInit() {
    this.loadMoldingSheet();
  }
  loadMoldingSheet() {
    this.loadingService.startLoading("Patienter pendant le chargement du moulage");
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.moldingService.getMoldingById(id).subscribe((molding) => {
      this.molding = molding;
      this.dataSource = this.molding.kits;
      (0, import_jsbarcode.default)("#barcode", this.molding.id.toString(), {
        height: 20,
        displayValue: false
      });
      this.loadingService.stopLoading();
    });
  }
  navigateHome() {
    this.router.navigate(["/home"]);
  }
  static ctorParameters = () => [
    { type: ActivatedRoute },
    { type: MoldingService },
    { type: LoadingService },
    { type: Router },
    { type: KitService }
  ];
};
PrintMoldingSheetPage = __decorate([
  Component({
    selector: "app-print-molding-sheet",
    template: print_molding_sheet_page_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      MatDivider,
      MatTable,
      MatColumnDef,
      MatHeaderCellDef,
      MatHeaderCell,
      MatCellDef,
      MatCell,
      MatHeaderRowDef,
      MatHeaderRow,
      MatRowDef,
      MatRow,
      NgForOf,
      JsonPipe,
      DatePipe
    ],
    styles: [print_molding_sheet_page_default2]
  })
], PrintMoldingSheetPage);

// angular:jit:template:file:src\app\molding\pages\create-molding\create-molding.page.html
var create_molding_page_default = `<ion-toolbar color=light class="ion-hide-md-down padding">\r
  <app-scan-molding-input slot=start></app-scan-molding-input>\r
  <!-- <app-scan-molding-input slot=start (evOnInput)="onInput($event)"></app-scan-molding-input> -->\r
  <!-- <ion-button size=small slot=end (click)="(expanded = !expanded) ? accordion.openAll() : accordion.closeAll()">\r
    {{(!expanded) ? 'D\xE9velopper tout' : 'Replier tout'}}</ion-button> -->\r
</ion-toolbar>\r
<ion-content>\r
\r
\r
  <ion-accordion-group #accordionGroup [multiple]="true">\r
    <!--  -->\r
    <!-- LISTE DES KITS -->\r
    <!--  -->\r
    <ion-accordion value="kits" *ngIf="molding.kits.length > 0" toggleIcon="chevron-down-outline" toggleIconSlot="end">\r
      <ion-item color=secondary slot=header>LISTE DES KITS</ion-item>\r
      <app-molding-kit-table slot=content [molding]=molding!></app-molding-kit-table>\r
    </ion-accordion>\r
    <!--  -->\r
    <!-- LISTE DES MATERIAUX AUTRES -->\r
    <!--  -->\r
    <ion-accordion value="materialSupplementary" *ngIf="molding?.materialSupplementary.length > 0"\r
      toggleIcon="chevron-down-outline" toggleIconSlot="end">\r
      <ion-item color=secondary slot=header>\r
        <ion-label>LISTE DES NIDAS</ion-label>\r
      </ion-item>\r
      <app-molding-materials-table slot=content [molding]="molding"></app-molding-materials-table>\r
    </ion-accordion>\r
  </ion-accordion-group>\r
</ion-content>\r
\r
\r
<ion-footer class="ion-hide-md-down">\r
  <app-molding-info-toolbar [molding]="molding"></app-molding-info-toolbar>\r
  <app-create-molding-toolbar></app-create-molding-toolbar>\r
</ion-footer>\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
<!-- footer -->\r
<!-- <ion-tab-bar slot="bottom" class="ion-hide-md-up">\r
  <ion-tab-button tab="schedule">\r
    <ion-icon name="link"></ion-icon>\r
    <ion-label>Outillage</ion-label>\r
    <ion-badge>6</ion-badge>\r
  </ion-tab-button>\r
\r
  <ion-tab-button tab="speakers" (click)="kitAlertPrompt()">\r
    <ion-icon name="scan"></ion-icon>\r
    <ion-label>Scan kit</ion-label>\r
  </ion-tab-button>\r
\r
  <ion-tab-button tab="map">\r
    <ion-icon name="print"></ion-icon>\r
    <ion-label>Imprimer</ion-label>\r
  </ion-tab-button>\r
\r
  <ion-tab-button tab="about" (click)="saveMoldingClick()">\r
    <ion-icon name="save"></ion-icon>\r
    <ion-label>Sauvegarder</ion-label>\r
  </ion-tab-button>\r
</ion-tab-bar> -->\r
`;

// angular:jit:style:file:src\app\molding\pages\create-molding\create-molding.page.scss
var create_molding_page_default2 = "/* src/app/molding/pages/create-molding/create-molding.page.scss */\n.padding {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=create-molding.page.css.map */\n";

// angular:jit:template:file:src\app\molding\components\create-molding\scan-molding-input\scan-molding-input.component.html
var scan_molding_input_component_default = '<!-- <div id="scan-input"> -->\r\n<ion-button slot=start size=small #scanButton fill=solid size=default (click)="switchScanState()">\r\n  {{scanButtonText}}\r\n</ion-button>\r\n<ion-spinner name="dots" *ngIf="loading"></ion-spinner>\r\n<ion-input slot=start #scanInput type="text" placeholder="scanner une fiche de vie KIT ou un n\xB0Outillage"\r\n  (change)="onInputChange(scanInput.value.toString())" (focusout)="inputOnBlur()" (focusin)="inputOnFocus()">\r\n</ion-input>\r\n<!-- </div> -->\r\n\r\n<!-- <ion-modal [isOpen]="isOpenNonExpiredMaterial" (ionModalDidDismiss)="isOpenNonExpiredMaterial=false" class="fullscreen">\r\n  <ng-template>\r\n    <app-non-expired-material-input [originalInput]="scanInput.value.toString()"></app-non-expired-material-input>\r\n  </ng-template>\r\n</ion-modal> -->\r\n';

// angular:jit:style:file:src\app\molding\components\create-molding\scan-molding-input\scan-molding-input.component.scss
var scan_molding_input_component_default2 = "/* src/app/molding/components/create-molding/scan-molding-input/scan-molding-input.component.scss */\n:host {\n  width: 33%;\n  display: flex;\n  width: 200%;\n  align-items: center;\n}\n/*# sourceMappingURL=scan-molding-input.component.css.map */\n";

// angular:jit:template:file:src\app\molding\components\create-molding\non-expired-material-input\non-expired-material-input.component.html
var non_expired_material_input_component_default = `<ion-header>\r
  <ion-toolbar>\r
    <ion-title>Mat\xE9riau non reconnu automatiquement</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding" fullscreen="true">\r
  <div class="orinal-input">\r
    <h1>Entr\xE9e : <span color="primary">{{batchNumber}}</span></h1>\r
  </div>\r
  <ion-item-divider>\r
  </ion-item-divider>\r
\r
  <div class="type">\r
    <div class="label">\r
      <h1>Type de l'entr\xE9e</h1>\r
      <p>S\xE9lectionner le type de mat\xE9riau</p>\r
    </div>\r
    <!-- // TODO ionic router -->\r
    <ion-segment #materialSegment [(ngModel)]="selectedType" scrollable="true" swipeGesture="true">\r
      <ion-segment-button value="nida">\r
        <ion-label>Nida</ion-label>\r
      </ion-segment-button>\r
      <ion-segment-button value="densif">\r
        <ion-label>Densification</ion-label>\r
      </ion-segment-button>\r
      <ion-segment-button value="clinquant">\r
        <ion-label>Clinquant</ion-label>\r
      </ion-segment-button>\r
      <ion-segment-button value="insert">\r
        <ion-label>Insert</ion-label>\r
      </ion-segment-button>\r
    </ion-segment>\r
  </div>\r
\r
  <ng-container *ngIf="selectedType==='nida'">\r
    <app-nida [batchNumberInput]="batchNumber" (nidaEmitter)="materialObject.next($event)"></app-nida>\r
  </ng-container>\r
\r
  <ng-container *ngIf="selectedType!=='nida'">\r
    Ce module est en cours de cr\xE9ation\r
\r
  </ng-container>\r
\r
</ion-content>\r
`;

// angular:jit:style:file:src\app\molding\components\create-molding\non-expired-material-input\non-expired-material-input.component.scss
var non_expired_material_input_component_default2 = "/* src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component.scss */\n/*# sourceMappingURL=non-expired-material-input.component.css.map */\n";

// angular:jit:template:file:src\app\molding\components\create-molding\nida\nida.component.html
var nida_component_default = `<div class="title">\r
  <h2>R\xE9f\xE9rence</h2>\r
  <p>S\xE9lectionner la r\xE9f\xE9rence qui correspond</p>\r
</div>\r
<form [formGroup]="nidaForm" (ngSubmit)="validate()">\r
\r
  <ion-radio-group #radioGroup formControlName="ref" required="true" allowEmptySelection="true">\r
    <ion-item>\r
      <ion-label>Autre :</ion-label>\r
      <!-- <ion-radio slot="start"></ion-radio> -->\r
      <ion-radio slot="start" [value]="manualInput.value"></ion-radio>\r
      <ion-input #manualInput type="text" placeholder="entr\xE9e la r\xE9f\xE9rence du nida">\r
      </ion-input>\r
    </ion-item>\r
    <!-- TODO transformer le mod\xE8le pour \xE9viter l'erreur -->\r
    <ion-list *ngIf="(references$ | async) as references">\r
      <ion-item *ngFor="let reference of references['NIDA']">\r
        <ion-label>{{reference.ref}}</ion-label>\r
        <ion-radio slot="start" [value]="reference.ref"></ion-radio>\r
      </ion-item>\r
    </ion-list>\r
\r
  </ion-radio-group>\r
  <ion-toolbar>\r
    <ion-buttons slot="end">\r
      <ion-button type="submit" color=success fill=solid [disabled]="nidaForm.invalid">\r
        Valider\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</form>\r
`;

// angular:jit:style:file:src\app\molding\components\create-molding\nida\nida.component.scss
var nida_component_default2 = "/* src/app/molding/components/create-molding/nida/nida.component.scss */\n/*# sourceMappingURL=nida.component.css.map */\n";

// src/app/molding/components/create-molding/nida/nida.component.ts
var NidaComponent = class NidaComponent2 {
  formBuilder;
  requestService;
  moldingService;
  nidaEmitter = new EventEmitter();
  batchNumberInput;
  nidaForm;
  references$;
  constructor(formBuilder, requestService, moldingService) {
    this.formBuilder = formBuilder;
    this.requestService = requestService;
    this.moldingService = moldingService;
  }
  ngOnInit() {
    this.nidaForm = this.formBuilder.group({
      numLot: new FormControl(this.batchNumberInput),
      id: new FormControl(),
      designation: new FormControl(),
      ref: new FormControl(""),
      typeMaterial: new FormControl(),
      outillageMoulage: new FormControl()
    });
    this.references$ = this.requestService.createGetRequest(`${environment.moldingApi}additional_materials`, {
      outillageMoulage: `api/tools/${this.moldingService.molding.OT.id}`,
      page: "1",
      itemsPerPage: "50"
    });
  }
  validate() {
    this.moldingService.addNida(this.nidaForm.value);
    this.nidaEmitter.emit(this.nidaForm.value);
  }
  changeInput() {
    console.log("input change");
  }
  static ctorParameters = () => [
    { type: FormBuilder },
    { type: RequestService },
    { type: MoldingService }
  ];
  static propDecorators = {
    nidaEmitter: [{ type: Output }],
    batchNumberInput: [{ type: Input }]
  };
};
NidaComponent = __decorate([
  Component({
    selector: "app-nida",
    template: nida_component_default,
    standalone: true,
    imports: [ReactiveFormsModule, IonicModule, NgIf, NgForOf, AsyncPipe],
    styles: [nida_component_default2]
  })
], NidaComponent);

// src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component.ts
var NonExpiredMaterialInputComponent = class NonExpiredMaterialInputComponent2 {
  materialObject;
  batchNumber;
  typeInputEv = new EventEmitter();
  materialSegment;
  nidaIsSelected;
  otherIsSelected;
  material;
  selectedType;
  constructor() {
  }
  ngOnDestroy() {
    this.materialObject.unsubscribe();
  }
  ngOnInit() {
    console.log("init");
  }
  typeClick(type) {
    this.selectedType = type;
  }
  validate() {
    this.materialObject.next(this.material);
  }
  static ctorParameters = () => [];
  static propDecorators = {
    materialObject: [{ type: Input }],
    batchNumber: [{ type: Input }],
    typeInputEv: [{ type: Output }],
    materialSegment: [{ type: ViewChild, args: ["materialSegment"] }]
  };
};
NonExpiredMaterialInputComponent = __decorate([
  Component({
    selector: "app-non-expired-material-input",
    template: non_expired_material_input_component_default,
    standalone: true,
    imports: [
      IonicModule,
      ReactiveFormsModule,
      FormsModule,
      NgIf,
      NidaComponent
    ],
    styles: [non_expired_material_input_component_default2]
  })
], NonExpiredMaterialInputComponent);

// src/app/molding/services/modal-material.service.ts
var ModalMaterialService = class ModalMaterialService2 {
  modalCtrl;
  materialObject;
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
  }
  createModal(scanInputValue) {
    return __async(this, null, function* () {
      this.materialObject = new Subject();
      const modalMaterial = yield this.modalCtrl.create({
        component: NonExpiredMaterialInputComponent,
        componentProps: { materialObject: this.materialObject, batchNumber: scanInputValue }
      });
      yield modalMaterial.present();
      this.materialObject.subscribe(() => {
        this.modalCtrl.dismiss();
        this.materialObject.unsubscribe();
      });
    });
  }
  static ctorParameters = () => [
    { type: ModalController }
  ];
};
ModalMaterialService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ModalMaterialService);

// src/app/molding/services/scan.service.ts
var REGEXKIT = new RegExp("^([0-9]){8}-[0-9]$");
var REGEXPROG = new RegExp("^PR[A-Z]([0-9]){5}$");
var REGEXSAPTOOLNUMBER = new RegExp("^OT([0-9]){6}$");
var REGEXNIDAHEXCEL = new RegExp("^]C201");
var ScanService = class ScanService2 {
  kitService;
  toolService;
  coreService;
  moldingService;
  materialModalService;
  focusState$ = new Subject();
  scanInput$ = new Subject();
  scanOperations$ = new Subject();
  scanState = false;
  constructor(kitService, toolService, coreService, moldingService, materialModalService) {
    this.kitService = kitService;
    this.toolService = toolService;
    this.coreService = coreService;
    this.moldingService = moldingService;
    this.materialModalService = materialModalService;
  }
  /**
   * Flux du traitement du scan
   * Reste à faire : Développer la partie Core, densification, ...
   *
   * @param scanInputValue
   * @return retourne un objet Kit ou Tool
   * @memberof ScanService
   */
  getScanInput(scanInputValue) {
    const typeInput = this.getTypeInput(scanInputValue);
    console.log(typeInput);
    switch (typeInput) {
      case "kit":
        return this.sendKit(scanInputValue);
      case "tool":
        return this.sendTool(scanInputValue);
      case "prog":
        return of(null);
      case "":
        return from(this.materialModalService.createModal(scanInputValue));
    }
  }
  getTypeInput(inputValue) {
    if (inputValue.match(REGEXKIT)) {
      return "kit";
    } else if (inputValue.match(REGEXSAPTOOLNUMBER)) {
      return "tool";
    } else if (inputValue.match(REGEXNIDAHEXCEL)) {
      return "core";
    } else if (inputValue.match(REGEXPROG)) {
      return "prog";
    }
    return "";
  }
  toggleFocusOnInput() {
    this.scanState = !this.scanState;
    this.focusState$.next(this.scanState);
  }
  sendKit(kitInput) {
    const kit$ = this.kitService.getKitById(kitInput);
    kit$.subscribe((kit) => {
      console.log(kit);
      this.moldingService.addKit(kit);
      this.scanOperations$.next();
    }, (err) => {
      console.error(err);
      this.scanOperations$.next();
    });
    return this.scanOperations$;
  }
  sendTool(toolInput) {
    if (toolInput.startsWith("OT0")) {
      toolInput = toolInput.substr(3);
    }
    this.toolService.getToolByToolNumber(toolInput).subscribe((responseTool) => {
      this.moldingService.addTool(responseTool);
      this.scanOperations$.next();
    }, (err) => {
      console.error(err);
      this.scanOperations$.next();
    });
    return this.scanOperations$;
  }
  sendCore(coreInput) {
    return this.coreService.getCoreByBatchNumber(coreInput);
  }
  static ctorParameters = () => [
    { type: KitService },
    { type: ToolService },
    { type: CoreService },
    { type: MoldingService },
    { type: ModalMaterialService }
  ];
};
ScanService = __decorate([
  Injectable({ providedIn: "root" })
], ScanService);

// src/app/molding/components/create-molding/scan-molding-input/scan-molding-input.component.ts
var ScanMoldingInputComponent = class ScanMoldingInputComponent2 {
  scanService;
  scanInput;
  scanButton;
  evOnInput = new EventEmitter();
  /**
   *
   *
   * @type {string}
   * @memberof ScanMoldingInputComponent
   */
  scanButtonText;
  /**
   *
   *
   * @type {boolean}
   * @memberof ScanMoldingInputComponent
   */
  isOpenNonExpiredMaterial;
  /**
   *
   *
   * @type {Observable<any>}
   * @memberof ScanMoldingInputComponent
   */
  getScanInput$;
  loading;
  /**
   * Creates an instance of ScanMoldingInputComponent.
   *
   * @param scanService
   * @param loadingService
   * @memberof ScanMoldingInputComponent
   */
  constructor(scanService) {
    this.scanService = scanService;
    scanService.focusState$.subscribe((state) => {
      if (state) {
        this.scanInput.setFocus();
      }
    });
  }
  // ngAfterViewChecked() {
  //   this.scanInput.setFocus();
  // }
  ngOnInit() {
  }
  /**
   * Initialisation de la page create molding
   *
   * @memberof ScanMoldingInputComponent
   */
  ngAfterViewInit() {
  }
  /**
   *Action du bouton.
   *Change l'état de la fonction "scan".
   *Si l'état est actif le focus est envoyé dans l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  switchScanState() {
    this.scanService.toggleFocusOnInput();
  }
  /**
   * Actions lors de la perte de focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnBlur() {
    this.scanButton.color = "danger";
    this.scanButtonText = "SCAN INACTIF";
  }
  /**
   * Actions lors de la reception du focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnFocus() {
    this.scanButton.color = "success";
    this.scanButtonText = "SCAN ACTIF";
  }
  /**
   * fonction lancée après l'entrée douchette.
   * Détecte l'objet d'entrée et l'emmet.
   *
   * @param inputValue entrée texte de l'input
   * @memberof ScanMoldingInputComponent
   */
  onInputChange(inputValue) {
    this.startLoading();
    this.scanService.getScanInput(inputValue).subscribe(() => {
      this.stopLoading();
    }, (err) => {
      console.error(err);
      this.stopLoading();
    });
  }
  startLoading() {
    this.loading = true;
  }
  stopLoading() {
    this.scanInput.value = "";
    this.loading = false;
  }
  static ctorParameters = () => [
    { type: ScanService }
  ];
  static propDecorators = {
    scanInput: [{ type: ViewChild, args: ["scanInput"] }],
    scanButton: [{ type: ViewChild, args: ["scanButton"] }],
    evOnInput: [{ type: Output }]
  };
};
ScanMoldingInputComponent = __decorate([
  Component({
    selector: "app-scan-molding-input",
    template: scan_molding_input_component_default,
    standalone: true,
    imports: [IonicModule, NgIf],
    styles: [scan_molding_input_component_default2]
  })
], ScanMoldingInputComponent);

// angular:jit:template:file:src\app\molding\components\create-molding\molding-kit-table\molding-kit-table.component.html
var molding_kit_table_component_default = `<ion-grid fixed style="width:100%;" class="table">\r
  <ion-row color=light class="table-header-row ion-padding">\r
    <ion-col size="2" size-lg="1" size-md="2">ID-MM</ion-col>\r
    <ion-col size="3" size-lg="3" size-md="6">D\xE9signation</ion-col>\r
    <ion-col size="1" size-lg="1" size-md="2">R\xE9f\xE9rence</ion-col>\r
    <ion-col size="2" size-lg="2" size-md="4">P\xE9remption \xE0 -18\xB0C</ion-col>\r
    <ion-col size="2" size-lg="2" size-md="4">\xE0 draper avant le</ion-col>\r
    <ion-col size="2" size-lg="2" size-md="4">\xE0 cuire avant le</ion-col>\r
    <!-- <ion-col size="1" size-lg="1" size-md="2">Btns</ion-col> -->\r
  </ion-row>\r
\r
  <ion-row class="table-data-row" *ngFor="let kit of molding.kits; let index = index;">\r
    <ion-item-sliding #slidingItem [disabled]="true">\r
      <ion-item button (mouseover)="openOptions(slidingItem)" lines="none">\r
        <ion-col size="2" size-lg="1" size-md="2">\r
          <ion-text class="strong" *ngIf="kit.id === molding.matDrap.id">(Drap)</ion-text>\r
          <ion-text class="strong" *ngIf="kit.id === molding.matPolym.id">(Pol)</ion-text>\r
          <ion-text color="primary">\r
            {{kit.idMM}}\r
          </ion-text>\r
        </ion-col>\r
        <ion-col size="3" size-lg="3" size-md="6">{{kit.designationSAP}}</ion-col>\r
        <ion-col size="1" size-lg="1" size-md="2">{{kit.referenceSAP}}</ion-col>\r
        <ion-col size="2" size-lg="2" size-md="4">\r
          <ion-text [appPeremp]="{dateToCompare: kit.peremptionMoins18}">\r
            {{kit.peremptionMoins18| date: "dd/MM/yyyy \xE0 HH:mm"}}\r
          </ion-text>\r
        </ion-col>\r
        <ion-col size="2" size-lg="2" size-md="4">\r
          <ion-text [appPeremp]="{dateToCompare: kit.aDrapAv, isLayup:(kit.layupDate) ? true : false }">\r
            {{kit.aDrapAv | date: "dd/MM/yyyy \xE0 HH:mm"}}\r
          </ion-text>\r
          <ion-icon *ngIf="kit.layupDate" name="stop-circle-outline"></ion-icon>\r
\r
        </ion-col>\r
        <ion-col size="2" size-lg="2" size-md="4">\r
          <ion-text [appPeremp]="{dateToCompare: kit.aCuirAv}">\r
            {{kit.aCuirAv | date: "dd/MM/yyyy \xE0 HH:mm"}}\r
          </ion-text>\r
        </ion-col>\r
\r
        <!-- <ion-col size="1" size-lg="1" size-md="2">\r
          <ion-button class="ion-hide-md-down" (click)="removeKitClick(index)">\r
            <ion-icon slot="icon-only" name="trash-outline"></ion-icon>\r
          </ion-button>\r
        </ion-col> -->\r
      </ion-item>\r
      <ion-item-options>\r
        <ion-item-option (click)="openDetails(kit)">D\xE9tails</ion-item-option>\r
        <ion-item-option (click)="layedKitClick(kit)">Drap\xE9</ion-item-option>\r
        <ion-item-option color="danger" (click)="removeKitClick(index)">\r
          <ion-icon slot="top" name="trash-outline"></ion-icon>\r
          Supprimer\r
        </ion-item-option>\r
      </ion-item-options>\r
    </ion-item-sliding>\r
  </ion-row>\r
</ion-grid>\r
\r
<!-- <mat-table #table [dataSource]="kitList">\r
  <ng-container matColumnDef="referenceSAP">\r
    <mat-header-cell *matHeaderCellDef>R\xE9f\xE9rence Sap</mat-header-cell>\r
    <mat-cell *matCellDef="let kit">\r
      {{kit.referenceSAP}}\r
      <ion-text class="strong" *ngIf="kit === molding.matDrap">(Drap)</ion-text>\r
      <ion-text class="strong" *ngIf="kit === molding.matPolym">(Pol)</ion-text>\r
    </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="idMM" class="ion-hide--md-down">\r
    <mat-header-cell *matHeaderCellDef>ID-MM</mat-header-cell>\r
    <mat-cell *matCellDef="let kit"> {{kit.idMM}} </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="designationSAP" class="ion-hide--md-down">\r
    <mat-header-cell *matHeaderCellDef>D\xE9signation</mat-header-cell>\r
    <mat-cell *matCellDef="let kit"> {{kit.designationSAP}} </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="peremptionMoins18">\r
    <mat-header-cell *matHeaderCellDef>P\xE9remption \xE0 -18\xB0C</mat-header-cell>\r
    <mat-cell *matCellDef="let kit"\r
      [style.color]="kitService.isPerim(kit.peremptionMoins18, molding.moldingDay) ? 'danger' : 'dark'">\r
      {{kit.peremptionMoins18 | date: "dd/MM/yyyy \xE0 HH:mm"}} </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="aDrapAv">\r
    <mat-header-cell *matHeaderCellDef>\xE0 draper avant le</mat-header-cell>\r
    <mat-cell *matCellDef="let kit"\r
      [style.color]="kitService.isPerim(kit.aDrapAv, molding.moldingDay) ? 'danger' : 'dark'">\r
      {{kit.aDrapAv | date: "dd/MM/yyyy \xE0 HH:mm"}} </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="aCuirAv">\r
    <mat-header-cell *matHeaderCellDef>\xE0 cuire avant le</mat-header-cell>\r
    <mat-cell *matCellDef="let kit"\r
      [style.color]="kitService.isPerim(kit.aCuirAv, molding.moldingDay) ? 'danger' : 'dark'">\r
      {{kit.aCuirAv |\r
      date: "dd/MM/yyyy \xE0 HH:mm"}} </mat-cell>\r
  </ng-container>\r
  <ng-container matColumnDef="commands">\r
    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r
    <mat-cell *matCellDef="let kit; let index">\r
      <ion-button class="ion-hide--md-down" (click)="removeKitClick(index)">\r
        <ion-icon slot="icon-only" name="trash-outline"></ion-icon>\r
      </ion-button>\r
    </mat-cell>\r
  </ng-container>\r
\r
  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>\r
  <mat-row *matRowDef="let kit; columns: displayedColumns;"></mat-row>\r
</mat-table> -->`;

// angular:jit:style:file:src\app\molding\components\create-molding\molding-kit-table\molding-kit-table.component.scss
var molding_kit_table_component_default2 = "/* src/app/molding/components/create-molding/molding-kit-table/molding-kit-table.component.scss */\n.table {\n  color: black;\n}\n.table-header-row {\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: rgb(244, 245, 248);\n}\n.table-data-row {\n  font-size: 16px;\n}\nion-item {\n  --background-hover: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=molding-kit-table.component.css.map */\n";

// angular:jit:template:file:src\app\molding\components\create-molding\kit-details\kit-details.component.html
var kit_details_component_default = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>D\xE9tails du kit</ion-card-subtitle>\r\n    <ion-card-title>\r\n      {{kit.id}} {{kit.designationSAP}}\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        <ion-label>status : {{kit.status}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>N\xB0 SAP : {{kit.referenceSAP}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>ID MM : {{kit.idMM}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>A cuire avant le : {{kit.aCuirAv}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>A draper avant le : {{kit.aDrapAv}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>P\xE9remption \xE0 -18\xB0C : {{kit.peremptionMoins18}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Cr\xE9\xE9 le : {{kit.createdAt}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Date et heure sortie du cong\xE9lateur :{{kit.decongel}} </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>TackLife : {{kit.tackLife}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Timeout : {{kit.timeOut}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

// angular:jit:style:file:src\app\molding\components\create-molding\kit-details\kit-details.component.scss
var kit_details_component_default2 = "/* src/app/molding/components/create-molding/kit-details/kit-details.component.scss */\n/*# sourceMappingURL=kit-details.component.css.map */\n";

// src/app/molding/components/create-molding/kit-details/kit-details.component.ts
var KitDetailsComponent = class KitDetailsComponent2 {
  kit;
  constructor() {
  }
  ngOnInit() {
  }
  static ctorParameters = () => [];
  static propDecorators = {
    kit: [{ type: Input }]
  };
};
KitDetailsComponent = __decorate([
  Component({
    selector: "app-kit-details",
    template: kit_details_component_default,
    standalone: true,
    imports: [IonicModule],
    styles: [kit_details_component_default2]
  })
], KitDetailsComponent);

// src/app/molding/directives/peremp.directive.ts
var PerempDirective = class PerempDirective2 {
  el;
  kitService;
  moldingService;
  appPeremp;
  constructor(el, kitService, moldingService) {
    this.el = el;
    this.kitService = kitService;
    this.moldingService = moldingService;
  }
  ngOnChanges(changes) {
    const isPerim = this.kitService.isPerim(this.appPeremp.dateToCompare, this.moldingService.molding.moldingDay);
    const isWarn = isPerim && !this.appPeremp.isLayup;
    console.log(isWarn);
    const color = isWarn ? "var(--ion-color-danger)" : "";
    this.el.nativeElement.style.color = color;
  }
  ngOnInit() {
  }
  static ctorParameters = () => [
    { type: ElementRef },
    { type: KitService },
    { type: MoldingService }
  ];
  static propDecorators = {
    appPeremp: [{ type: Input }]
  };
};
PerempDirective = __decorate([
  Directive({
    selector: "[appPeremp]",
    standalone: true
  })
], PerempDirective);

// src/app/molding/components/create-molding/molding-kit-table/molding-kit-table.component.ts
var MoldingKitTableComponent = class MoldingKitTableComponent2 {
  moldingService;
  modalCtrl;
  alertCtrl;
  kitService;
  molding;
  dataSource = new MatTableDataSource();
  displayedColumns = [
    "referenceSAP",
    "idMM",
    "designationSAP",
    "peremptionMoins18",
    "aDrapAv",
    "aCuirAv",
    "commands"
  ];
  constructor(moldingService, modalCtrl, alertCtrl, kitService) {
    this.moldingService = moldingService;
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.kitService = kitService;
  }
  /**
   * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
   *
   * @param index Index du kit dans la liste des kits
   * @memberof CreateMoldingPage
   */
  removeKitClick(index) {
    this.moldingService.removeKit(index);
  }
  openOptions(slidingItem) {
    console.log(slidingItem);
    slidingItem.open("end");
    setTimeout(() => {
      slidingItem.close();
    }, 3e3);
  }
  openDetails(kitToOpen) {
    return __async(this, null, function* () {
      const modalWindow = yield this.modalCtrl.create({
        component: KitDetailsComponent,
        componentProps: { kit: kitToOpen }
      });
      modalWindow.present();
    });
  }
  layedKitClick(kit) {
    return __async(this, null, function* () {
      const alertWindow = yield this.alertCtrl.create({
        message: "D\xE9clarer le kit comme moul\xE9",
        buttons: [
          {
            text: `Oui maintenant : ${(/* @__PURE__ */ new Date()).toISOString()}`,
            handler: (value) => {
              kit.layupDate = /* @__PURE__ */ new Date();
              this.kitService.updateKit(kit);
              this.moldingService.updateMoldings();
            }
          },
          {
            text: "Oui et modifier la date",
            handler: (value) => {
              kit.layupDate = /* @__PURE__ */ new Date();
              this.kitService.updateKit(kit);
              this.moldingService.updateMoldings();
            }
          },
          {
            text: "Non",
            handler: (value) => __async(this, null, function* () {
              yield alertWindow.dismiss();
            })
          }
        ]
      });
      yield alertWindow.present();
    });
  }
  static ctorParameters = () => [
    { type: MoldingService },
    { type: ModalController },
    { type: AlertController },
    { type: KitService }
  ];
  static propDecorators = {
    molding: [{ type: Input }]
  };
};
MoldingKitTableComponent = __decorate([
  Component({
    selector: "app-molding-kit-table",
    template: molding_kit_table_component_default,
    standalone: true,
    imports: [
      IonicModule,
      NgForOf,
      NgIf,
      PerempDirective,
      DatePipe
    ],
    styles: [molding_kit_table_component_default2]
  })
], MoldingKitTableComponent);

// angular:jit:template:file:src\app\molding\components\create-molding\molding-materials-table\molding-materials-table.component.html
var molding_materials_table_component_default = '<ion-grid fixed style="width:100%;" class="table">\r\n  <ion-row class="table-header-row ion-padding">\r\n    <ion-col size="6">\r\n      <ion-label>\r\n        N\xB0 de lot\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size="6">\r\n      <ion-label>\r\n        R\xE9f\xE9rence\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class="table-data-row" *ngFor="let mat of molding.materialSupplementary">\r\n    <ion-col size="6">\r\n      <ion-label>\r\n        {{mat.numLot}}\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size="6">\r\n      <ion-label>\r\n        {{mat.ref}}\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n';

// angular:jit:style:file:src\app\molding\components\create-molding\molding-materials-table\molding-materials-table.component.scss
var molding_materials_table_component_default2 = "/* src/app/molding/components/create-molding/molding-materials-table/molding-materials-table.component.scss */\n.table {\n  color: black;\n  text-align: center;\n}\n.table-header-row {\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: rgb(244, 245, 248);\n  align-items: center;\n}\n.table-data-row {\n  font-size: 16px;\n  align-items: center;\n}\n/*# sourceMappingURL=molding-materials-table.component.css.map */\n";

// src/app/molding/components/create-molding/molding-materials-table/molding-materials-table.component.ts
var MoldingMaterialsTableComponent = class MoldingMaterialsTableComponent2 {
  molding;
  constructor() {
  }
  ngOnInit() {
  }
  static ctorParameters = () => [];
  static propDecorators = {
    molding: [{ type: Input }]
  };
};
MoldingMaterialsTableComponent = __decorate([
  Component({
    selector: "app-molding-materials-table",
    template: molding_materials_table_component_default,
    standalone: true,
    imports: [IonicModule, NgForOf],
    styles: [molding_materials_table_component_default2]
  })
], MoldingMaterialsTableComponent);

// angular:jit:template:file:src\app\molding\components\create-molding\molding-info-toolbar\molding-info-toolbar.component.html
var molding_info_toolbar_component_default = `<ion-toolbar>\r
  <ion-text slot="start">Outillage :</ion-text>\r
  <ion-text *ngIf="molding?.OT"> OT0{{molding?.OT.sapToolNumber}} {{molding?.OT.designation}}</ion-text>\r
  <ion-button colorStatus="" [color]="toolStatusColor" *ngIf="!molding?.OT" (click)="noToolClick()">Pas d'outillage\r
    associ\xE9\r
  </ion-button>\r
\r
  <div class="col" slot=end>\r
    <ion-text class="strong">Fait le : {{molding?.moldingDay | DateHeure}}</ion-text>\r
    <ion-text class="strong" *ngIf="molding?.userCreat">R\xE9alis\xE9 par : {{molding?.userCreat.nom}}\r
      {{molding?.userCreat.prenom}}</ion-text>\r
  </div>\r
  <ion-text *ngIf=molding?.aDraperAv slot=end class="strong">A draper avant le : {{molding?.aDraperAv | DateHeure}}\r
  </ion-text>\r
  <ion-text *ngIf=molding?.aCuireAv slot=end class="strong">A cuire avant le : {{molding?.aCuireAv | DateHeure}}\r
  </ion-text>\r
</ion-toolbar>\r
`;

// angular:jit:style:file:src\app\molding\components\create-molding\molding-info-toolbar\molding-info-toolbar.component.scss
var molding_info_toolbar_component_default2 = "/* src/app/molding/components/create-molding/molding-info-toolbar/molding-info-toolbar.component.scss */\nion-toolbar > * {\n  padding-inline: 10px;\n}\nion-toolbar .col {\n  display: flex;\n  flex-direction: column;\n}\nion-toolbar .strong {\n  font-weight: bold;\n}\n/*# sourceMappingURL=molding-info-toolbar.component.css.map */\n";

// src/app/molding/components/create-molding/molding-info-toolbar/molding-info-toolbar.component.ts
var MoldingInfoToolbarComponent = class MoldingInfoToolbarComponent2 {
  moldingService;
  molding;
  toolStatusColor = "warning";
  constructor(moldingService) {
    this.moldingService = moldingService;
    this.moldingService.moldingStatus$.subscribe({
      next: (status) => {
        if (status.toolStatus) {
          this.toolStatusColor = "success";
          return;
        }
        this.toolStatusColor = "warning";
      }
    });
  }
  noToolClick() {
    this.moldingService.molding.outillage = "";
    this.moldingService.updateMoldings();
    this.moldingService.setToolStatus(true);
  }
  static ctorParameters = () => [
    { type: MoldingService }
  ];
  static propDecorators = {
    molding: [{ type: Input }]
  };
};
MoldingInfoToolbarComponent = __decorate([
  Component({
    selector: "app-molding-info-toolbar",
    template: molding_info_toolbar_component_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      DateHeurePipe
    ],
    styles: [molding_info_toolbar_component_default2]
  })
], MoldingInfoToolbarComponent);

// angular:jit:template:file:src\app\molding\components\create-molding\create-molding-toolbar\create-molding-toolbar.component.html
var create_molding_toolbar_component_default = '<ion-toolbar color=light>\r\n  <ion-buttons slot="start">\r\n    <ion-button *ngIf="isActive" color=danger fill=outline [disabled]="!isActive!" (click)="setInactiveClick()">\r\n      <ion-icon slot="start" name="close-circle-outline"></ion-icon>\r\n      Annuler le moulage\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="end" collapse="true">\r\n    <ion-button color=primary slot=end (click)="saveMoldingClick(true)" fill="solid" [disabled]="!isMoldingComplete">\r\n      <ion-icon slot="start" name="save-outline"></ion-icon>\r\n      SAUVEGARDER\r\n    </ion-button>\r\n    <!-- <ion-button color=primary slot=end (click)="saveMoldingClick(true)" fill="solid" [disabled]="!isMoldingComplete">\r\n      <ion-icon slot="start" name="print-outline"></ion-icon>\r\n      TERMINER\r\n    </ion-button> -->\r\n  </ion-buttons>\r\n</ion-toolbar>';

// angular:jit:style:file:src\app\molding\components\create-molding\create-molding-toolbar\create-molding-toolbar.component.scss
var create_molding_toolbar_component_default2 = "/* src/app/molding/components/create-molding/create-molding-toolbar/create-molding-toolbar.component.scss */\nion-toolbar > * {\n  padding-inline: 10px;\n}\nion-toolbar .col {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=create-molding-toolbar.component.css.map */\n";

// src/app/molding/components/create-molding/create-molding-toolbar/create-molding-toolbar.component.ts
var CreateMoldingToolbarComponent = class CreateMoldingToolbarComponent2 {
  moldingService;
  isActive;
  isMoldingComplete;
  moldingStatus$;
  constructor(moldingService) {
    this.moldingService = moldingService;
    this.moldingService.molding$.asObservable().subscribe((molding) => {
      console.log("create molding toolbar receive new Molding");
      this.isActive = molding.isActive;
    });
    this.moldingStatus$ = this.moldingService.moldingStatus$;
    this.moldingStatus$.subscribe({
      next: (moldingStatus) => {
        this.isMoldingComplete = moldingStatus.moldingStatus;
      }
    });
  }
  saveMoldingClick(print) {
    this.moldingService.saveMolding(print);
  }
  setInactiveClick() {
    this.moldingService.cancelMolding();
  }
  static ctorParameters = () => [
    { type: MoldingService }
  ];
};
CreateMoldingToolbarComponent = __decorate([
  Component({
    selector: "app-create-molding-toolbar",
    template: create_molding_toolbar_component_default,
    standalone: true,
    imports: [IonicModule, NgIf],
    styles: [create_molding_toolbar_component_default2]
  })
], CreateMoldingToolbarComponent);

// src/app/molding/pages/create-molding/create-molding.page.ts
var CreateMoldingPage = class CreateMoldingPage2 {
  activatedRoute;
  roleGuard;
  titleService;
  accordionGroup;
  moldingService = inject(MoldingService);
  isAdmin = false;
  molding = null;
  molding$ = this.moldingService.molding$.asObservable();
  constructor(activatedRoute, roleGuard, titleService) {
    this.activatedRoute = activatedRoute;
    this.roleGuard = roleGuard;
    this.titleService = titleService;
  }
  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.titleService.setTitle(`MODIFICATION MOULAGE n\xB0${id}`);
      this.loadMoldingData(id);
      return;
    }
    this.moldingService.initMolding();
    this.titleService.setTitle(`CREATION D'UN MOULAGE`);
  }
  ngOnInit() {
    this.molding$.subscribe({
      next: (molding) => {
        this.molding = molding;
        if (this.molding.kits.length > 0) {
          this.accordionGroup.value = "kits";
        }
        if (this.molding.materialSupplementary.length > 0) {
          this.accordionGroup.value = "materialSupplementary";
        }
      }
    });
    this.isAdmin = this.roleGuard.isRole(["ROLE_ADMIN"]);
  }
  /**
   * Charge le moulage dans la page
   *
   * @private
   * @param moldingId
   * @memberof CreateMoldingPage
   */
  loadMoldingData(moldingId) {
    this.moldingService.loadMolding(moldingId);
  }
  static ctorParameters = () => [
    { type: ActivatedRoute },
    { type: RoleGuard },
    { type: TitleService }
  ];
  static propDecorators = {
    accordionGroup: [{ type: ViewChild, args: ["accordionGroup", { static: true }] }]
  };
};
CreateMoldingPage = __decorate([
  Component({
    selector: "app-create-molding",
    template: create_molding_page_default,
    standalone: true,
    imports: [
      IonicModule,
      ScanMoldingInputComponent,
      NgIf,
      MoldingKitTableComponent,
      MoldingMaterialsTableComponent,
      MoldingInfoToolbarComponent,
      CreateMoldingToolbarComponent
    ],
    styles: [create_molding_page_default2]
  })
], CreateMoldingPage);

// src/app/molding/molding.routes.ts
var MOLDING_ROUTES = [
  {
    path: "",
    children: [
      { path: "print/:id", component: PrintMoldingSheetPage },
      { path: "print", component: PrintMoldingSheetPage },
      { path: "create", component: CreateMoldingPage },
      { path: "edit/:id", component: CreateMoldingPage },
      { path: "**", redirectTo: "" }
    ]
  }
];
export {
  MOLDING_ROUTES
};
//# sourceMappingURL=molding.routes-K2EUY4EP.js.map
