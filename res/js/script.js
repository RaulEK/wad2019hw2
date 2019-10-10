$(function () {
  var user = new User('Mart', 'Mets', '10/10/2000', 'Software Engineering', 3.5);
  var courses = [
    new Course('Web application development', 3, 'F'),
    new Course('Introduction to data science', 2, 'D'),
    new Course('Algoritmid ja andmestruktuurid', 3, 'A'),
    new Course('Sissejuhatus erialasse', 1, 'B')
  ];

  init();

  $("#profile-button").click( function() {
    $("#courses-button").removeClass("active");
    $("#profile-button").addClass("active");
    $("#courses-container").removeClass("active");
    $("#profile-container").addClass("active")
  });

  $("#courses-button").click( function() {
    $("#profile-button").removeClass("active");
    $("#courses-button").addClass("active");
    $("#profile-container").removeClass("active");
    $("#courses-container").addClass("active")
  });

  function init() {
    $("#name").text(user.firstname + ' ' + user.lastname);
    $("#birthdate").text(user.birthdate);
    $("#faculty").text(user.faculty);
    $("#gpa").text(user.gpa);
  }

  for (let i = 0; i < courses.length; i++) {
    let tr = $("<tr></tr>");
    let td1 = $("<td></td>").text(i+1);
    let td2 = $("<td></td>").text(courses[i].title);
    let td3 = $("<td></td>").text(courses[i].semester);
    let td4 = $("<td></td>").text(courses[i].grade);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    $("#course-details").append(tr);
  }
});
