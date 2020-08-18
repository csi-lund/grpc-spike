var PROTO_PATH = __dirname + "/protos/elev.proto";

var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var elev_proto = grpc.loadPackageDefinition(packageDefinition).elev;

function AddElev(call, callback) {
  callback(null, createElev(call.request));
}

function createElev(elev)
{
    var success = { succes: true };
    return success;
}

function main() {
  var server = new grpc.Server();
  server.addService(elev_proto.elevManager.service, { AddElev: AddElev });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
