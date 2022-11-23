const logger = require('./logger')

function errorLogger() {
    throw new Error('Se ha detectado un fallo')
}

try {
    errorLogger()
} catch (e) { 
    logger.error('error', e.toString())
}