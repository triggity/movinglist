
import * as winston from 'winston';

const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: LOG_LEVEL,
        }),
    ],
});

export default logger;