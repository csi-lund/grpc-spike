const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
const TYPES = require("tedious").TYPES;
const config = require("../config/config.js");

// Create connection to database
var connection = new Connection(config);

function InsertStudent(student) {
  request = new Request(
    `INSERT INTO Student (Name, IdentifiesAs, DOB, SocialSecurityNumber)
     OUTPUT INSERTED.Id VALUES (@name, @identifiedAs, @DOB, @socialSecurityNumber);`,
    
     function (err, rowCount, rows) {
      if (err) { 
        callback(err);
      } else {
        console.log(rowCount + " row(s) inserted");
      }
    }
  );

  request.addParameter("Name", TYPES.NVarChar, student.Name);
  request.addParameter("identifiesAs", TYPES.NVarChar, student.IdentifiesAs);
  request.addParameter("DOB", TYPES.Date, student.DOB);
  request.addParameter("socialSecurityNumber", TYPES.NVarChar, student.SocialSecurityNumber);

  // Execute SQL statement
  var uuid = connection.execSql(request);
  return uuid;
}

function InsertParent(parent) {
  request = new Request(
    `INSERT INTO Parent (Name, SocialSecurityNumber IdentifiesAs, Addressline1, Addressline2, City, Postnumber)
     OUTPUT INSERTED.Id VALUES (@name, @socialSecurityNumber, @identifiedAs, @addressline1, @addressline2, @city, @postnumber);`,

    function (err, rowCount, rows) {
      if (err) {
        callback(err);
      } else {
        console.log(rowCount + " row(s) inserted");
      }
    }
  );

  request.addParameter("name", TYPES.NVarChar, parent.Name);
  request.addParameter("socialSecurityNumber", TYPES.NVarChar,parent.socialSecurityNumber);
  request.addParameter("identifiesAs", TYPES.NVarChar, parent.identifiesAs);
  request.addParameter("addressline1", TYPES.NVarChar, parent.addressline1);
  request.addParameter("addressline2", TYPES.NVarChar, parent.addressline2);
  request.addParameter("city", TYPES.NVarChar, parent.city);
  request.addParameter("postnumber", TYPES.NVarChar, parent.postnumber);

  // Execute SQL statement
  var uuid = connection.execSql(request);
  return uuid;
}

function LinkParentAndStudent(studentId, parentId) {
   request = new Request(
     `INSERT INTO StudentParent (StudentId, ParentId) VALUES (@studentId, @parentId);`,

     function (err, rowCount, rows) {
       if (err) {
         callback(err);
       } else {
         console.log(rowCount + " row(s) inserted");
       }
     }
   );

   request.addParameter("StudentId", TYPES.UniqueIdentifier, studentId);
   request.addParameter("ParentId", TYPES.UniqueIdentifier, parentId);
   connection.execSql(request);
}

function GetAll() {
   request = new Request(
     `SELECT * FROM Student`,

     function (err, rowCount, rows) {
       if (err) {
         callback(err);
       } else {
         console.log(rowCount + " row(s) inserted");
       }
      }); 
      
      return connection.execSql(request);
};

// Attempt to connect and execute queries if connection goes through
connection.on("connect", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
