// A js client implementation of the protobuf for testing
var PROTO_PATH = __dirname + '/protos/student.proto';
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

var student_proto = grpc.loadPackageDefinition(packageDefinition).student;

function main() {
  var client = new student_proto.studentManager(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

}

main();
