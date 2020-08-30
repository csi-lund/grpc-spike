CREATE TABLE dbo.Student (
  Id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
  Name NVARCHAR(150),
  IdentifiesAs NVARCHAR(20),
  DOB Date,
  SocialSecurityNumber NVARCHAR(50),
);

CREATE TABLE dbo.StudentParent (
  StudentId UNIQUEIDENTIFIER,
  ParentId UNIQUEIDENTIFIER,
  PRIMARY KEY(StudentId, ParentId));

CREATE TABLE dbo.Parent (
  Id UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
  FirstName NVARCHAR(150),
  LastName NVARCHAR(150),
  SocialSecurityNumber NVARCHAR(50),
  IdentifiesAs NVARCHAR(20),
  AddressLine1  NVARCHAR(10) NOT NULL,
  AddressLine2  NVARCHAR(10),
  City  NVARCHAR(10) NOT NULL,
  PostNumber NVARCHAR(10) NOT NULL,
  SpouseId UNIQUEIDENTIFIER,
);

CREATE TABLE dbo.StudentChangeLog (
  StudentId UNIQUEIDENTIFIER PRIMARY KEY,
  EventDateTime DATETIME2,
  EventType NVARCHAR(15),
  PropertySnapshot NVARCHAR
);

CREATE TABLE dbo.ParentChangeLog (
  ParentId UNIQUEIDENTIFIER PRIMARY KEY,
  EventDateTime DATETIME2,
  EventType NVARCHAR(15),
  PropertySnapshot NVARCHAR
);