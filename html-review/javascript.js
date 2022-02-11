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
