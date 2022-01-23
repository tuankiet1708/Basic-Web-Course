function submit() {
    // đọc giá trị từ input #numbers
    var numbers = document.getElementById("numbers").value;

    // tách các số từ chuỗi
    numbers = numbers.split(",").map(function(item) {return parseInt(item)});

    // sắp xếp theo chiều giảm dần
    numbers.sort(function(a, b){return b - a});

    document.getElementById("total").innerHTML = numbers.length;

    // đọc giá trị từ input #rows
    var rows = parseInt(document.getElementById("rows").value);

    // tính số lượng số hiển thị mỗi dòng
    var nItemsPerRow = Math.ceil(numbers.length / rows);

    console.log({numbers, rows, nItemsPerRow});
    
    // tính toán chuỗi HTML sẽ in ra màn hình
    var result = "";

    for(var i = 0; i < rows; i++){
        for(var j = 0; j < nItemsPerRow; j++){
            // tính chỉ số của phần tử tiếp theo 
            var offset = i * nItemsPerRow + j;

            // nếu chỉ số của phần tử vẫn nhỏ hơn số lượng các con số thì thực hiện 
            if (offset <= (numbers.length - 1) ) {
                var className = "";

                //
                var curNumber = numbers[offset];

                // kiểm tra số chẵn, lẻ
                switch (Math.abs(curNumber) % 2) {
                    case 0: 
                        className = "even ";
                        break;
                    case 1: 
                        className = "odd ";
                        break;
                }

                // kiểm tra số 0, < 0, > 0
                if (curNumber < 0) {
                    className += "negative";
                } else if (curNumber > 0) {
                    className += "positive";
                } else {
                    className += "zero";
                }

                result += "<div class='square " + className + "'>" + curNumber + "</div>";
            } else {
                break;
            }
        }
        
        // xuống dòng
        result += "<div style='clear:both'></div>";
    }
    
    // In ra màn hình
    document.getElementById("result").innerHTML = result;
}