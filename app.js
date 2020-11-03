var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.addEventListener("DOMContentLoaded", function () {
    var d4Button = document.getElementById('d4');
    var d6Button = document.getElementById("d6");
    var d8Button = document.getElementById('d8');
    var d10Button = document.getElementById('d10');
    var d12Button = document.getElementById('d12');
    var d20Button = document.getElementById('d20');
    var reRollButton = document.getElementById("reRoll");
    var dieSumButton = document.getElementById("dieSum");
    var resetButton = document.getElementById("reset-button");
    var diceContainer = document.getElementById("diceContainer");
    var getRandomValue = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    var diceArray = [];
    var Die = /** @class */ (function () {
        function Die(value) {
            this.value = value;
        }
        Die.prototype.roll = function () {
            this.value = getRandomValue(1, 5);
            this.div.innerText = this.value;
        };
        Die.prototype.deleteDie = function () {
            this.div.remove();
            var index = diceArray.indexOf(this);
            diceArray.splice(index, 1);
        };
        return Die;
    }());
    var D4 = /** @class */ (function (_super) {
        __extends(D4, _super);
        function D4(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d4-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        return D4;
    }(Die));
    ;
    var D6 = /** @class */ (function (_super) {
        __extends(D6, _super);
        function D6(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d6-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        D6.prototype.roll = function () {
            this.value = getRandomValue(1, 7);
            this.div.innerText = this.value;
        };
        return D6;
    }(Die));
    var D8 = /** @class */ (function (_super) {
        __extends(D8, _super);
        function D8(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d8-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        D8.prototype.roll = function () {
            this.value = getRandomValue(1, 9);
            this.div.innerText = this.value;
        };
        return D8;
    }(Die));
    var D10 = /** @class */ (function (_super) {
        __extends(D10, _super);
        function D10(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d10-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        D10.prototype.roll = function () {
            this.value = getRandomValue(1, 11);
            this.div.innerText = this.value;
        };
        return D10;
    }(Die));
    var D12 = /** @class */ (function (_super) {
        __extends(D12, _super);
        function D12(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d12-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        D12.prototype.roll = function () {
            this.value = getRandomValue(1, 13);
            this.div.innerText = this.value;
        };
        return D12;
    }(Die));
    var D20 = /** @class */ (function (_super) {
        __extends(D20, _super);
        function D20(value) {
            var _this = _super.call(this, value) || this;
            _this.div = document.createElement("div");
            _this.div.addEventListener('click', function () { return _this.roll(); });
            _this.div.addEventListener('dblclick', function () { return _this.deleteDie(); });
            _this.div.className = "d20-roll";
            _this.div.innerText = _this.value;
            diceContainer.appendChild(_this.div);
            _this.div.style.color = "black";
            return _this;
        }
        D20.prototype.roll = function () {
            this.value = getRandomValue(1, 21);
            this.div.innerText = this.value;
        };
        return D20;
    }(Die));
    reRollButton.addEventListener("click", reRoll);
    d4Button.addEventListener("click", makeD4);
    d6Button.addEventListener("click", makeD6);
    d8Button.addEventListener("click", makeD8);
    d10Button.addEventListener("click", makeD10);
    d12Button.addEventListener("click", makeD12);
    d20Button.addEventListener("click", makeD20);
    dieSumButton.addEventListener('click', sumDice);
    function makeD4() {
        var d4 = new D4(getRandomValue(1, 5));
        diceArray.push(d4);
        console.log(diceArray);
    }
    ;
    function makeD6() {
        var d6 = new D6(getRandomValue(1, 7));
        diceArray.push(d6);
        console.log(diceArray);
    }
    ;
    function makeD8() {
        var d8 = new D8(getRandomValue(1, 9));
        diceArray.push(d8);
        console.log(diceArray);
    }
    ;
    function makeD10() {
        var d10 = new D10(getRandomValue(1, 9));
        diceArray.push(d10);
        console.log(diceArray);
    }
    ;
    function makeD12() {
        var d12 = new D12(getRandomValue(1, 13));
        diceArray.push(d12);
        console.log(diceArray);
    }
    ;
    function makeD20() {
        var d20 = new D20(getRandomValue(1, 21));
        diceArray.push(d20);
        console.log(diceArray);
    }
    ;
    function reRoll() {
        for (var i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    }
    function sumDice() {
        var sum = 0;
        for (var i = 0; i < diceArray.length; i++) {
            sum += diceArray[i].value;
        }
        alert("Total: " + sum);
    }
    ;
    resetButton.addEventListener("click", function () {
        location.reload();
    });
    // event listener (
    // // let newdie = new Die(math.random.... )
    // )
    //end of body
});
