"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// áp dụng react component
// code trong public/scripts/app.js là code đã được babel convert

/*
  - Chạy live-server và babel locally: chạy câu lệnh: npm run ... trong "scripts" của package.json

  -JS thao tác và truy xuất dữ liệu trên JSX thông qua ReactDOM và hiện trên browser
  -React Component(tự định nghĩa) luôn có chữ cái đầu viết hoa, VD: <Header/>, được tạo ra 
  bởi ES6-classes và có thể reuse
  - Prop React component: key-value. -> Cách access: this.props.nameOfKey (quy tắc this giống trong Object)
  - từng child trong array trong JSX phải có 1 prop tên là "key"

  - React Component State: bản chất là 1 Object với key-value. "Dòng React Component State":
  + khởi tạo giá trị default
  + React Component state render giá trị khởi tạo đó
  + Thay đổi giá trị khởi tạo
  + React Component State sẽ tự động render lại giá trị
  + lặp lại bước 3 nếu thay đổi tiếp

  + Nên tạo hàm thay đổi data trên parent RC đó rồi chuyển lại cho child RC để child thực hiện bởi 
  không thể thay đổi data của props trên các hàm của child RC mà props đó được khởi tạo trong parent RC
  -> child RC đã dùng các hàm đó để "communicate" với parent RC để thay đổi và truy xuất data
  
  -So sánh props và state
  Giống nhau: đều là Object, đều được sử dụng để rendering, đều có thể change cause re-rendering (với state là nhờ setState() và với
  props là được thay đổi từ parent rồi chuyền xuống cho child)
  Điểm khác:+ Muốn thay đổi data của props thì phải thay đổi từ trên (tức là parent) rồi chuyền xuống cho child dưới dạng props,
            + Props không thể thay đổi trong component(ngoại trừ phần render() nhưng thực chất là data trong props vẫn không thay đổi), 
            ngược lại data trong state có thể thay đổi trong Component của chính nó nhờ setState() 
            + state thì được định nghĩa trong Component của chính nó, có thể chứa props data cho các child nếu như các props đó có thể thay đổi
  

  -STATELESS FUNCTIONAL COMPONENT: giống react Component based Class nhưng nó không sử dụng được "State" tuy nhiên vẫn có thể truy xuất và sử 
  dụng props như là agrument đầu tiên của 1 hàm
  Ưu điểm: đối với các RC based Class chỉ có 1 hàm render() -> chuyển sang stateless functional component sẽ nhanh và gọn hơn
  -Default Props: setup được cho cả RC based Class và Stateless functional Component, syntax: RC.defaultProps = {}
  -Lifecycle methods: chỉ áp dụng cho RC based Class, được kích hoạt tại nhiều thời điểm khác nhau của RC và được kích hoạt 
  behind the sence, bản thân render() cũng là một lifecycle methods, các methods này có 2 agru: preProps, preState

  -Ôn lại localStorage và JSON: localStorage lưu trữ data giữ những lần page "refresh", JSON- string presentation của Object,Array trong JS, một loại
  format lưu Object và array của JS dưới dạng String

  
*/
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.state = {
      options: props.options // default props chỉ có nghĩa khi ở trong constructor?

    };
    _this.handlerRemoveAllOptions = _this.handlerRemoveAllOptions.bind(_assertThisInitialized(_this));
    _this.handlerPickRandom = _this.handlerPickRandom.bind(_assertThisInitialized(_this));
    _this.handlerAddOption = _this.handlerAddOption.bind(_assertThisInitialized(_this));
    _this.handlerRemoveIndividualOption = _this.handlerRemoveIndividualOption.bind(_assertThisInitialized(_this));
    return _this;
  } //ví dụ về 2 lifecycle method điển hình


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // được kích hoạt sau khi render xong
      try {
        // để tránh ngoại dữ liệu trong localStorage có thể không parse được
        var json = localStorage.getItem("options"); // get data

        var options = JSON.parse(json);

        if (options) {
          // nếu options không phải là null
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (error) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // được kích hoạt khi data của Component thay đổi(state hoặc props bị thay đổi)
      if (this.state.options.length !== prevState.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json); // set data
      }
    }
  }, {
    key: "handlerRemoveAllOptions",
    value: function handlerRemoveAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlerRemoveIndividualOption",
    value: function handlerRemoveIndividualOption(option) {
      this.setState(function (preState) {
        return {
          options: preState.options.filter(function (o) {
            return o !== option;
          })
        };
      });
    }
  }, {
    key: "handlerPickRandom",
    value: function handlerPickRandom() {
      var randomPick = Math.floor(Math.random() * this.state.options.length);
      var optionPicked = this.state.options[randomPick];
      alert(optionPicked);
    }
  }, {
    key: "handlerAddOption",
    value: function handlerAddOption(option) {
      if (!option) {
        return "Error: Please enter valid text";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Error: This option has already exists";
      }

      this.setState(function (preState) {
        return {
          options: preState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in your hand! Destiny";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0 ? false : true,
        pickRandom: this.handlerPickRandom
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        removeAllOptions: this.handlerRemoveAllOptions,
        handlerRemoveIndividualOption: this.handlerRemoveIndividualOption
      }), /*#__PURE__*/React.createElement(AddOptions, {
        handlerAddOption: this.handlerAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["One", "Two", "Three", "Four"] //options: []

}; // stateless functional component
// RC nhưng chỉ có 1 hàm render() nên switch sang stateless functional component

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: "Indecision App"
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: props.hasOptions,
    onClick: props.pickRandom
  }, "What should I do"));
};

var Options = /*#__PURE__*/function (_React$Component2) {
  _inherits(Options, _React$Component2);

  var _super2 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super2.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "render",
    value: // constructor(props) {
    //   super(props);
    //  this.handlerRemoveAll = this.handlerRemoveAll.bind(this); // bind "this" keyword trong hàm handlerRemoveAll với this mong muốn ở đây là Class
    // }
    function render() {
      var _this2 = this;

      // onClick sẽ có context giống hàm handlerRemoveAll, tuy nhiên this lúc này đã không còn trỏ
      // class nữa mà nó không trỏ gì cả (null) hay mất "This" vì là props của eventHandler(trong eventHandler this trỏ null)
      // sử dụng bind(this) -> mà this trong render là trỏ class -> bind "this" này với "this" trong hàm của eventHandler
      //onClick={this.handlerRemoveAll.bind(this)} tuy nhiên cách này khiến ta phải code lại liên tục nếu muốn sử dụng hàm này
      // thay vào đó ta "bind" ngay trên constructor. Bây giờ hàm handlerRemoveAll() đã bị bỏ
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.removeAllOptions
      }, "Remove All Options"), /*#__PURE__*/React.createElement("br", null), this.props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please enter some text"), this.props.options.length, this.props.options.map(function (o) {
        return /*#__PURE__*/React.createElement(Option, {
          key: o,
          optionText: o,
          handlerRemoveIndividualOption: _this2.props.handlerRemoveIndividualOption
        });
      }));
    }
  }]);

  return Options;
}(React.Component); // Muốn truyền hàm có para vào eventHandler -> tạo một arrow function cho eventHandler đó rồi gọi hàm với para


var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handlerRemoveIndividualOption(props.optionText);
    }
  }, "Remove"));
};

var AddOptions = /*#__PURE__*/function (_React$Component3) {
  _inherits(AddOptions, _React$Component3);

  var _super3 = _createSuper(AddOptions);

  function AddOptions(props) {
    var _this3;

    _classCallCheck(this, AddOptions);

    _this3 = _super3.call(this, props);
    _this3.handlerAddOptions = _this3.handlerAddOptions.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOptions, [{
    key: "handlerAddOptions",
    value: function handlerAddOptions(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim(); //form.elements.nameOfElement(input).value

      e.target.elements.option.value = "";
      var error = this.props.handlerAddOption(option);
      console.log(error);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handlerAddOptions
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById("app-id")); // RC nhưng chỉ có 1 hàm render() nên switch sang stateless functional component
// class Header extends React.Component {
//   // required method khi là subclass của React.Component
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={this.props.hasOptions}
//           onClick={this.props.pickRandom}
//         >
//           What should I do
//         </button>
//       </div>
//     );
//   }
// }
// class Option extends React.Component {
//   render() {
//     return <li>{this.props.optionText}</li>;
//   }
// }
