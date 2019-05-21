let express = require('express'),
    messageController = require('./controllers/messages_controller')
    app = express(),
    port = 3001;


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, messageController.create)
app.get(messagesBaseUrl, messageController.read)
app.put(`${messagesBaseUrl}/:id`, messageController.update)
app.delete(`${messagesBaseUrl}/:id`, messageController.delete)

app.listen(port, () => {
    console.log(`${port} is open`)
})