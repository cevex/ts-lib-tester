import moment from 'moment';

const levels = ['error', 'warn', 'info', 'debug'];
export type LogLevel = 'error' | 'warn' | 'info' | 'debug';

export class LoggerService {
    logLevel: LogLevel = 'info';

    setLogLevel(logLevel: LogLevel) {
        if (levels.indexOf(logLevel) > -1) {
            this.logLevel = logLevel;
        } else {
            throw new Error('LogLevel not recognized, logLevel noy changed, log levels available are : ' + levels.join(', '));
        }
    }

    debug(...message: any[]): void {
        this.log('debug', message);
    }

    info(...message: any[]): void {
        this.log('info', message);
    }

    error(...message: any[]): void {
        this.log('error', message);
    }

    warn(...message: any[]): void {
        this.log('warn', message);
    }

    // tslint:disable:no-console
    log(level: string, message: any): void {
        if (levels.indexOf(level) <= levels.indexOf(this.logLevel)) {
            switch (level) {
                case 'debug':
                    console.log(...message);
                    break;
                case 'info':
                    console.log(`INFO: ${moment().format('L LTS Z')}: `, ...message);
                    break;
                case 'warn':
                    console.warn(`WARN: ${moment().format('L LTS Z')}: `, ...message);
                    break;
                case 'error':
                    console.error(`ERROR: ${moment().format('L LTS Z')}: `, ...message);
                    break;
            }
        }
    }

    // tslint:enable
}
