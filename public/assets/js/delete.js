$(document).ready(function () {
    $("#dlt-btn").on("click", function (e) {
        e.preventDefault();
        let id = 2;

        $.ajax("/api/user/" + id, { type: "DELETE" });
        window.location.replace("/");
    });
});