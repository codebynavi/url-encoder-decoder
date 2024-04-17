$(document).ready(function () {
     // Clear input field on page load
    $('#result').val('');

    //code for encode URL
    $('#btnEncode').click(function () {
        var url = $('#result').val();
        if (url == '') {
            alert('Please Enter URL or Text in the input Box');
        } else {
            if (isEncoded(url)) {
                alert("URL is already in encoded form!");
                $(this).prop('disabled', true);
            } else {
                var encodedUrl = encodeURIComponent(url);
                $('#result').val(encodedUrl);
                $(this).prop('disabled', true);
                $('#btnDecode').prop('disabled', false);
            }
        }

    });

    // code for decode URL
    $('#btnDecode').click(function () {
        var url = $('#result').val();
        if (url == '') {
            alert('Please Enter URL or Text in the input Box');
        } else {
            if (!isEncoded(url)) {
                alert("URL is already in decoded form!");
                $(this).prop('disabled', true);
            } else {
                var decodedUrl = decodeURIComponent(url);
                $('#result').val(decodedUrl);
                $(this).prop('disabled', true);
                $('#btnEncode').prop('disabled', false);
            }
        }
    });

    // code for copy result data
    $('#btnCopy').click(function () {
        var resultText = $('#result').val();
        copyToClipboard(resultText);
    });

    // Function to check if URL is already encoded
    function isEncoded(url) {
        try {
            return decodeURIComponent(url) !== url;
        } catch (e) {
            return false;
        }
    }

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        alert("Copied to clipboard!");
    }

    $('#btnRefresh').click(function () {
        // Reload the current page
        location.reload();
    });

    const currentYear = new Date().getFullYear();
    $('#getYear').text(currentYear);
});
