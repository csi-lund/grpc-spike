var PROTO_PATH = __dirname + "/../protos/student.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var student_proto = grpc.loadPackageDefinition(packageDefinition).student;

// Server implementations
function AddStudent(call, callback) {
  callback(null, function () {
    var student = call.requst;
    return { succes: true };
  });
}

function GetByName(call, callback) {
  callback(null, function() { });
}

function GetByUUID(call, callback) {
  callback(null, function () {});
}

function GetAll(call, callback) {
  callback(null, function () {});
}

function RemoveStudent(call, callback) {
  callback(null, function () {});
}

function main() {
  var server = new grpc.Server();
  // map proto methods to implementations
  server.addService(student_proto.studentManager.service, {
    AddStudent: AddStudent,
    GetByName: GetByName,
    GetByUUID: GetByUUID,
    GetAll: GetAll,
    RemoveStudent: RemoveStudent,
  });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
