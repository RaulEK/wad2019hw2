$(() => {
    const user = new User('Mart', 'Mets', '10/10/2000', 'Software Engineering', 3.5);
    let courses = [
        new Course('Web application development', 3, '40'),
        new Course('Introduction to data science', 2, '60'),
        new Course('Algoritmid ja andmestruktuurid', 3, '91'),
        new Course('Sissejuhatus erialasse', 1, '81')
    ];

    init();

    $("#profile-button").click(() => {
        $("#courses-button").removeClass("active");
        $("#profile-button").addClass("active");
        $("#courses-container").removeClass("active");
        $("#profile-container").addClass("active")
    });

    $("#courses-button").click(() => {
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
        const tr = $("<tr></tr>");
        const td1 = $("<td></td>").text(i + 1);
        const td2 = $("<td></td>").text(courses[i].title);
        const td3 = $("<td></td>").text(courses[i].semester);
        const td4 = $("<td></td>").text(courses[i].grade);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        $("#course-details").append(tr);
    }

    $("#add-course-button").click(() => $("#add-course").css({display: $("#add-course").css("display") === "none" ? "inline" : "none"}));

    const gradeToPoint = (grade) => grade > 90 ? 4 : grade > 80 ? 3 : grade > 70 ? 2 : grade > 60 ? 1 : grade > 50 ? 0.5 : 0
});