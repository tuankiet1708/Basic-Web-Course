function bai1(name, age, address) {
    return "Tôi tên \"" + name + "\", năm nay tôi \"" + age + " tuổi\"." + "<br/>"
         + "Tôi đang sống tại \"" + address + "\"." + "<br/><br/>";
}

var bai2 = {
    name: 'Kiệt',
    age: 29,
    address: 'Tp.HCM',
    intro: function() {
        return bai1(this.name, this.age, this.address);
    },

}

function hello() {
    document.getElementById("demo").innerHTML = bai2.intro();
}