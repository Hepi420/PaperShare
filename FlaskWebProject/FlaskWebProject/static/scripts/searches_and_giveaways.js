function parse_and_upload_giveaway(university, user) {
    console.log("in the parse_and_upload_giveaway()");

    // get variables
    var faculty_select = document.getElementById("give_away_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("give_away_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    var description_input = document.getElementById("Description");
    var description = description_input.value;

    console.log("in the parse_and_upload_giveaway() - university: " + university);
    console.log("in the parse_and_upload_giveaway() - user: " + user);
    console.log("in the parse_and_upload_giveaway() - faculty: " + faculty);
    console.log("in the parse_and_upload_giveaway() - course: " + course);
    console.log("in the parse_and_upload_giveaway() - description: " + description);

    add_giveawat_to_db(university, user, faculty, course, description);

}

function load_table() {
    make_new_caption();

    // toggle table on
    var table = document.getElementById("search_table");
    var num_of_rows = table.rows.length;
    // if table is already fill up, remove all previous search
    if (num_of_rows > 1) {
        for (var i = num_of_rows; i > 1; i--) {
            table.deleteRow(i - 1);
        }
    }
    // if table style is none  (hidden) - change it to inline (show)
    if (table.style.display === "none") {
        table.style.display = "inline";
    }
    /*
     function for uploading table from DB
     */

    const found_in_DB = [
        { course: "����� 13", email: "13.13", description: "���� ��� ���� ���� �� ����� ������ ����� ������ ����, ����� ��� ����� ��� �����", button: "��� ���� �����" },
        { course: "�����5", email: "10.13", description: "buisness plans", button: "��� ���� �����" },
        { course: "����� 12", email: "13.10", description: "more money making ideas", button: "��� ���� �����" },
    ];
    // fill up table
    found_in_DB.forEach(item => {
        let row = table.insertRow();
        let button = create_button();
        button_place = row.insertCell(0);
        button_place.appendChild(button);
        let description = row.insertCell(1);
        description.innerHTML = item.description;
        let email = row.insertCell(2);
        email.innerHTML = item.email;
        let course = row.insertCell(3);
        course.innerHTML = item.course;
    });

    // when finished, submit form
    // document.getElementById("search_material").submit();
}

function make_new_caption() {
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;
    // make new table caption
    var new_caption = faculty + " / " + course;
    // change in HTML
    document.getElementById("table_caption").innerHTML = new_caption;
}

function create_button() {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-ps pull-right");
    button.setAttribute("id", "email_button");
    button.setAttribute("onclick", "new_mail_request();");
    button.innerHTML = "��� ����";
    return button;
}

function new_mail_request() {
    // prepare data to send
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    // get from table!
    var giver_email = "enter_email@papershare.co.il";
    var subject = "can i get your things pliz";
    var body = "i want the things in " + course + "from " + faculty;
    let send_us_copy = "papershare@gmail.com"

    // email sender
    //window.open("mailto:" + giver_email + '?cc=' + send_us_copy + '&subject=' + subjet + '&body=' + body);
    location.href = "mailto:" + giver_email + '?cc=' + send_us_copy + '&subject=' + subject + '&body=' + body;

    //"email sender from technion+ app"
    //location.href = "https://mail.google.com/mail/u/0/?view=cm&amp;to=" + giver_email + "&amp;su=" + subject + "&amp;fs=1&amp;tf=1"   
    //<a id="bws" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&amp;to=print.bws@campus.technion.ac.il&amp;su=���� ���� ���� ���&amp;fs=1&amp;tf=1"><span class="img_container"><img src="icons/page.svg"></span> ���� ���, ��-����</a>
}
