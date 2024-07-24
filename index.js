let display_value = '';

function hasConsecutiveOperators(str) {
    const operators = ['+', '-', '*', '/'];
    for (let i = 0; i < str.length - 1; i++) {
        if (operators.includes(str[i]) && operators.includes(str[i + 1])) {
            return true;
        }
    }
    return false;
}

$(".numpad div").on("click", function() {
    var $this = $(this);
    $this.addClass("animate");
    setTimeout(function() {
        $this.removeClass("animate");
    }, 100);
    
    var n = $(this).text();

    // Perform operations based on button click
    if (n === 'sq') {
        display_value = (display_value * display_value).toString();
        $(".text1").text(display_value);
    } else if (n === '√') {
        display_value = Math.sqrt(display_value).toString();
        $(".text1").text(display_value);
    } else if (n === 'ln') {
        display_value = Math.log(display_value).toString();
        $(".text1").text(display_value);
    } else if (n === 'log') {
        display_value = Math.log10(display_value).toString();
        $(".text1").text(display_value);
    } else if (n === '=') {
        if (hasConsecutiveOperators(display_value)) {
            $(".text1").text("Error: Consecutive operators not allowed");
        } else {
            try {
                var result = eval(display_value);
                $(".text1").text(result);
                display_value = result.toString();
            } catch (e) {
                $(".text1").text("Error");
            }
        }
    } else if (n === 'del') {
        display_value = display_value.slice(0, -1);
        $(".text1").text(display_value || "0");
    } else if (n === 'AC') {
        display_value = '';
        $(".text1").text("0");
    } else {
        // Append digit or operator
        display_value += n;
        $(".text1").text(display_value);
    }
});