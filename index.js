"use strict";
exports.__esModule = true;
exports.LogLevel = void 0;
var Level;
(function (Level) {
    Level[Level["DEBUG"] = 0] = "DEBUG";
    Level[Level["INFO"] = 1] = "INFO";
    Level[Level["ERROR"] = 2] = "ERROR";
})(Level || (Level = {}));
var LogLevel = /** @class */ (function () {
    function LogLevel(level, name) {
        this.logTheFuncName = true;
        this.logTheLogLevel = true;
        this.logTheTimestamp = true;
        switch (level) {
            case "DEBUG":
                this.logLevel = Level.DEBUG;
                break;
            case "INFO":
                this.logLevel = Level.INFO;
                break;
            case "ERROR":
                this.logLevel = Level.ERROR;
                break;
            default:
                this.logLevel = Level.INFO;
                break;
        }
        this.funcName = name;
    }
    LogLevel.prototype.displayTheTimestamp = function (value) {
        this.logTheTimestamp = value;
    };
    LogLevel.prototype.displayTheLogLevel = function (value) {
        this.logTheLogLevel = value;
    };
    LogLevel.prototype.displayTheFuncName = function (value) {
        this.logTheFuncName = value;
    };
    LogLevel.prototype.getTimestamp = function () {
        var date = new Date();
        return date.toISOString();
    };
    LogLevel.prototype.logger = function (message) {
        console.log("" + (this.logTheTimestamp ? "[" + this.getTimestamp() + "]\t" : "") + (this.logTheLogLevel ? "[" + Level[this.logLevel] + "]\t" : "") + (this.logTheFuncName ? "[" + this.funcName + "]\t" : "") + message);
    };
    LogLevel.prototype.debug = function (message) {
        if (this.logLevel <= 0) {
            this.logger(message);
        }
    };
    LogLevel.prototype.info = function (message) {
        if (this.logLevel <= 1) {
            this.logger(message);
        }
    };
    LogLevel.prototype.error = function (message) {
        if (this.logLevel <= 2) {
            this.logger(message);
        }
    };
    return LogLevel;
}());
exports.LogLevel = LogLevel;
