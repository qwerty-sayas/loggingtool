enum Level {
    DEBUG,
    INFO,
    ERROR
  }
  
class LogLevel {
    logLevel: Level;
    funcName: string;
    logTheTimestamp: boolean;
    logTheFuncName: boolean;
    logTheLogLevel: boolean;
    constructor(level: string, name: string){
      this.logTheFuncName = true;
      this.logTheLogLevel = true;
      this.logTheTimestamp = true;
      switch(level){
        case `DEBUG`:
          this.logLevel = Level.DEBUG;
          break;
        case `INFO`:
          this.logLevel = Level.INFO;
          break;
        case `ERROR`:
          this.logLevel = Level.ERROR;
          break;
        default: 
          this.logLevel = Level.INFO;
          break;
      }
      this.funcName = name;
    }
    displayTheTimestamp(value: boolean){
      this.logTheTimestamp = value;
    }
    displayTheLogLevel(value: boolean){
      this.logTheLogLevel = value;
    }
    displayTheFuncName(value: boolean){
      this.logTheFuncName = value;
    }
    getTimestamp(){
      const date = new Date();
      return date.toISOString();
    }
    logger(message: any){
      console.log(`${this.logTheTimestamp?`[${this.getTimestamp()}]\t`:``}${this.logTheLogLevel?`[${Level[this.logLevel]}]\t`:``}${this.logTheFuncName?`[${this.funcName}]\t`:``}` + message);
    }
    debug(message: any){
      if(this.logLevel <= 0){
        this.logger(message);
      }
    }
    info(message: any){
      if(this.logLevel <= 1){
        this.logger(message);
      }
    }
    error(message: any){
      if (this.logLevel <= 2){
        this.logger(message);
      }
    }
}

export { LogLevel };