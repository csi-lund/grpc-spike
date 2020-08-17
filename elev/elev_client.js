var PROTO_PATH = __dirname + '/protos/elev.proto';
var grpc = require('grpc');
var async = require("async");

var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

var elev_proto = grpc.loadPackageDefinition(packageDefinition).elev;

function main() {
  var client = new elev_proto.elevManager(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

}

main();
