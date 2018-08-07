module.exports = (config, type) => {
    if (type === 'mongodb') {
        return `mongodb://${config.dbAuthUser}:${config.dbAuthPassword}@${config.dbAuthHost}:${config.dbAuthPort}/${config.dbAuthSchema}`
    }
    else {
        return null
    }
} 