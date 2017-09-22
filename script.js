$.get("logo-flex-rel.svg", function(data, status)
	{
    //alert("Data: " + data + "\nStatus: " + status);
    //console.log(decodeHtml(data));
    $('#logo').html(decodeHtml(data));
	},
	'text'
);

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}