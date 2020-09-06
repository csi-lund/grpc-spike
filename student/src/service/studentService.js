const repository = require("../src/data/repository.js");

function AddStudentAndParents () {
    var student = call.request;
    var parents = call.request.parents;

    // script validation
    var studentId = repository.InsertStudent(student);
    var savedStudent = {
      uuid = studentId,
      name = student.name,
      identifiesAs = student.identifiesAs,
      socialSecurityNumber = student.socialSecurityNumber,
      dateofbirth = student.dateOfBirth,
      parentIds = []
    };

    parents.forEach((parent) => {
      var id = repository.InsertParent(parent);
      savedStudent.parentIds.push(id);
    });  

    return savedStudent;
}