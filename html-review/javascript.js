var name = "...";
var birthday = "...";
var sex = "...";
var address = "...";

// thay thế HTML chứa các đoạn mã input nhập thông tin
function replaceHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}
// Tạo các mã HTML chứa thẻ input
function makeTagInput(id, value, type) {
    return "<input id=\"" + id + "\" type=\"" + type + "\" value=\"" + value + "\">";
}
function makeTagTextarea(id, value) {
    return "<textarea id=\"" + id + "\">" + value + "</textarea>";
}

// Tạo các mã HTML chứa action link
function makeActionLink(event, label) {
    return "<a href='javascript:;' onclick='" + event +  "()'>" + label + "</a>";
}

function profileOnEdit() {
    var cancelLink = makeActionLink("profileOnCancel", "Huỷ");
    var updateLink = makeActionLink("profileOnUpdate", "Cập nhật");

    // thay thế HTML chứa đoạn mã các link Huỷ và Cập nhật
    document.getElementById("profileActionButtons").innerHTML = cancelLink + " " + updateLink;

    // thay thế HTML chứa các đoạn mã input nhập thông tin
    // replaceHTML("name", `<input id="nameInput" type="text" value="${name}">`); // ES6 Literal Template String
    replaceHTML("name", makeTagInput("nameInput", name, "text"));
    replaceHTML("birthday", makeTagInput("birthdayInput", birthday, "text"));
    replaceHTML("sex", makeTagInput("sexInput", sex, "text")); 
    replaceHTML("address", makeTagInput("addressInput", address, "text"));
}

function profileOnUpdate() {
    // lấy giá trị đã nhập và cập nhật vào các biến toàn cục
    name = document.getElementById("nameInput").value;
    birthday = document.getElementById("birthdayInput").value;
    sex = document.getElementById("sexInput").value;
    address = document.getElementById("addressInput").value;

    // thay thế giá trị đã nhập để hiển thị ra HTML
    replaceHTML("name", name);
    replaceHTML("birthday", birthday);
    replaceHTML("sex", sex);
    replaceHTML("address", address);

    // hiển thị link Sửa
    var editLink = makeActionLink("profileOnEdit", "Sửa");
    document.getElementById("profileActionButtons").innerHTML = editLink;
}

function profileOnCancel() {
    // lấy giá trị cũ để hiển thị ra HTML
    replaceHTML("name", name);
    replaceHTML("birthday", birthday);
    replaceHTML("sex", sex);
    replaceHTML("address", address);

    // hiển thị link Sửa
    var editLink = makeActionLink("profileOnEdit", "Sửa");
    document.getElementById("profileActionButtons").innerHTML = editLink;
}

// Object to store a list of workingExperience
var workingExperience = [
    {
        "time": "05/2014 - 7/2020",
        "companyName": "VNG",
        "position": "Software Engineer",
        "job": '<ul class="list-with-image">\
                    <li>Design</li>\
                    <li>Develop</li>\
                </ul>'
    },
    {
        "time": "07/2020 - Current",
        "companyName": "Vsee",
        "position": "Software Engineer",
        "job": '<ul class="list-with-image">\
                    <li>Design</li>\
                    <li>Develop</li>\
                </ul>'
    }
];


// Tạo các mã HTML chứa action link
function makeActionLinkForEachRowOfWorkingExp(event, label, index) {
    return "<a href='javascript:;' onclick='" + event +  "(" + index + ")'>" + label + "</a>";
}

function makeTableBodyOfWorkingExp() {
    var html = "";

    workingExperience.forEach(function(item, index) {
        var editLink = makeActionLinkForEachRowOfWorkingExp("workingExpOnEdit", "Sửa", index);
        var deleteLink = makeActionLinkForEachRowOfWorkingExp("workingExpOnDelete", "Xoá", index);

        html += '<tr>\
                    <td>' 
                        + (index + 1) + '<br/>' 
                        + '<span id="expActions_' + index + '">' + editLink + '<br/>' + deleteLink + '</span>' +
                    '</td>\
                    <td id="expTime_' + index + '">' + item.time + '</td>\
                    <td id="expCompanyName_' + index + '">' + item.companyName + '</td>\
                    <td id="expPosition_' + index + '">' + item.position + '</td>\
                    <td id="expJob_' + index + '" align="left">' + item.job + '</td>\
                </tr>';
    });

    replaceHTML("tableWorkingExp", html);
}

makeTableBodyOfWorkingExp();

function workingExpOnEdit(index) {
    replaceHTML(
        "expTime_" + index, 
        makeTagInput("expTimeInput_" + index, workingExperience[index].time, "text")
    );

    replaceHTML(
        "expCompanyName_" + index, 
        makeTagInput("expCompanyNameInput_" + index, workingExperience[index].companyName, "text")
    );

    replaceHTML(
        "expPosition_" + index, 
        makeTagInput("expPositionInput_" + index, workingExperience[index].position, "text")
    );

    replaceHTML(
        "expJob_" + index, 
        makeTagTextarea("expJobTextarea_" + index, workingExperience[index].job)
    );
}

function workingExpOnDelete(index) {
    if (confirm("Bạn có muốn xoá dòng " + (index + 1)) == true) {
        workingExperience.splice(index, 1);
        makeTableBodyOfWorkingExp();
    } else {
        //
    }
}
