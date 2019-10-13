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

    $("#save-course").click(() => {
        const name = $("#title").val();
        const semester = $("#semester").val();
        const grade = $("#grade").val();
        courses.push(new Course(name, parseInt(semester, 10), parseInt(grade, 10)));
        renderCourses();
        hideOrShowAddCourseForm();
        setGpa();
        clearCourseForm();
    });

    $("#cancel-course").click(() => {
      clearCourseForm();
      hideOrShowAddCourseForm();
    });

    function clearCourseForm() {
      $("#title").val('');
      $("#semester").val('');
      $("#grade").val('');
    }

    function init() {
        $("#name").text(user.firstname + ' ' + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa").text(user.gpa);
    }

    function renderCourses() {
      $("#course-details").empty();
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
    }

    function setGpa() {
      const gpa = courses.map((course) => gradeToPoint(parseInt(course.grade)))
                         .reduce((acc, grade) => acc + grade, 0) / courses.length;
      console.log(courses.map((course) => gradeToPoint(parseInt(course.grade))));
      console.log(gpa);
      // state management 🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃
      user.gpa = gpa;
      $("#gpa").text(user.gpa);
    }

    renderCourses();

    function hideOrShowAddCourseForm() {
      $("#add-course").css({display: $("#add-course").css("display") === "none" ? "inline" : "none"})
    }

    $("#add-course-button").click(hideOrShowAddCourseForm);

    const gradeToPoint = (grade) => grade > 90 ? 4 : grade > 80 ? 3 : grade > 70 ? 2 : grade > 60 ? 1 : grade > 50 ? 0.5 : 0
});
