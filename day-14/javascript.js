function submit() {
    try {
        // đọc giá trị từ input #numbers
        var numbers = document.getElementById("numbers").value;

        // xử lý lỗi
        if (numbers.trim() == "") {
            // alert("'Dãy số cần tính' không được để trống.");
            // return;
            throw "'Dãy số cần tính' không được để trống.";
        }

        // tách các số từ chuỗi
        numbers = numbers.split(",");
        var total = numbers.length;

        // xử lý lỗi
        for (var i = 0; i < total; i++) {
            var castNumber = parseInt(numbers[i]);

            if (isNaN(castNumber) || castNumber.toString() != numbers[i]) {
                // alert("'Dãy số cần tính' chỉ chấp nhận số nguyên.");
                // return;
                throw "'Dãy số cần tính' chỉ chấp nhận số nguyên.";
            } 

            numbers[i] = castNumber;
        }

        // sắp xếp theo chiều giảm dần
        numbers.sort(function(a, b){return b - a});

        document.getElementById("total").innerHTML = numbers.length;

        // đọc giá trị từ input #rows
        var rows = document.getElementById("rows").value;

        // xử lý lỗi
        if (rows.trim() == "") {
            // alert("'Số dòng tối đa' không được để trống.");
            // return;
            throw "'Số dòng tối đa' không được để trống.";
        }

        var castRows = parseInt(rows);
        if (isNaN(castRows) || castRows.toString() != rows) {
            //
            // alert("'Số dòng tối đa' chỉ chấp nhận số nguyên dương.");
            // return;
            throw "'Số dòng tối đa' chỉ chấp nhận số nguyên.";
        }

        if (castRows <= 0) {
            throw "'Số dòng tối đa' không được phép nhỏ hơn 1.";
        }

        rows = parseInt(rows);

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
    catch (err) {
        alert(err);
    }
}