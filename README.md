# loggingtool
A simple logging tool with hierarchies built-in.

### log level
DEBUG: includes (DEBUG, INFO, ERROR)
INFO: includes (INFO, ERROR)
ERROR: includes (ERROR)

## Installation

```sh
$ npm install loggingtool
```


## Documentation

### Start logging

Usage:

```js
var LoggingTool = require('logging-tool');
var logger = new LoggingTool.LogLevel(`DEBUG`, `MyFunction`);
logger.debug(`This is a debug message.`);
// console.log [2021-02-07T18:31:46.358Z]  [DEBUG] [MyFunction]    This is a debug message.
```

#### Features
- Easy to use with no dependencies
- By default, Timestamp, LogLevel, & FunctionName are logged.
- Turn Timestamp, LogLevel, & FunctionName logging on/off as follows:
```js
logger.displayTheTimestamp(false);
logger.displayTheLogLevel(false);
logger.displayTheFuncName(false);
```

## License
See the [LICENSE](./LICENSE) file.