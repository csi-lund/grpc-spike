var PROTO_PATH = __dirname + "/protos/student.proto";

var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var elev_proto = grpc.loadPackageDefinition(packageDefinition).student;

function AddStudent(call, callback) {
  callback(null, createStudent(call.request));
}

function createStudent(student)
{
    var success = { succes: true };
    return success;
}

function main() {
  var server = new grpc.Server();
  server.addService(student_proto.studentManager.service, { AddStudent: AddStudent });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
