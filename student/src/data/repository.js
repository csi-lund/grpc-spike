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


// Attempt to connect and execute queries if connection goes through
connection.on("connect", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
