var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (fromUser, message) {
    var messages = fromUser + ":" + message;
    var li = document.createElement("li");
    li.textContent = messages;
    $("#lists").append(li);
})


connection.start();

$("#btnSubmit").on("click", function () {
    var from = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("SendMessage", from, message);
})