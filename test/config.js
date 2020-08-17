const path = require('path');

module.exports = {
    local: {
        networkId: 'local',
        nodeUrl: 'http://localhost:3030',
        keyPath: path.join(process.env.HOME, '.near/local/validator_key.json')
    }
};
