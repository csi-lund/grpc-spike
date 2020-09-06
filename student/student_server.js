var PROTO_PATH = __dirname + "/../protos/student.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const service = require("./src/service/student.js");

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
  callback(null, service.AddStudentAndParents(call));
}

function GetByUUID(call, callback) {
  callback(null, function () {
  });
}

function GetAll(call, callback) {
  callback(null, service.GetAll(call));
}

function Get(call, callback) {
  callback(null, function () {});
}

function main() {
  var server = new grpc.Server();
  // map proto methods to implementations
  server.addService(student_proto.studentManager.service, {
    AddStudent: AddStudent,
    GetByUUID: GetByUUID,
    GetAll: GetAll,
    Get: Get,
  });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
