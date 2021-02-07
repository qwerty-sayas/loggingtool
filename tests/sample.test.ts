const logger = require("../index");

test(`Test the DEBUG`, () => {
    
    const logLevel = `DEBUG`;
    const funcName = `MyFunction`;

    const log = new logger.LogLevel(logLevel, funcName);
    const message = `This is a debug message.`;

    const mockedTimestamp = jest.fn(() => `2021-02-07T18:31:46.358Z`);

    log.getTimestamp = mockedTimestamp;

    const consoleSpy = jest.spyOn(console, 'log');
    log.debug(message);
    
    expect(consoleSpy).toHaveBeenLastCalledWith(`[2021-02-07T18:31:46.358Z]\t[DEBUG]\t[MyFunction]\t${message}`);

})

test(`Test the INFO`, () => {
    
    const logLevel = `INFO`;
    const funcName = `MyFunction`;

    const log = new logger.LogLevel(logLevel, funcName);
    const message = `This is a info message.`;

    const mockedTimestamp = jest.fn(() => `2021-02-07T18:31:46.358Z`);

    log.getTimestamp = mockedTimestamp;

    const consoleSpy = jest.spyOn(console, 'log');
    log.info(message);
    
    expect(consoleSpy).toHaveBeenLastCalledWith(`[2021-02-07T18:31:46.358Z]\t[INFO]\t[MyFunction]\t${message}`);

})