const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader');
const protoPath = require('path').join(__dirname, 'api', 'api.proto')
const config = require('../config/keys')

const packageDefinition = protoLoader.loadSync(
    protoPath,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults:true,
        oneofs:true
    }
)

var apiProto = grpc.loadPackageDefinition(packageDefinition)

const client = new apiProto.api.CategoryServices(`${config.grpcServerHost}:${config.grpcPort}`, grpc.credentials.createInsecure())

module.exports = client