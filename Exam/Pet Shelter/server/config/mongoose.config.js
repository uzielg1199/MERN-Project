const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@clusterjuly.2gn0tm8.mongodb.net/pets_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));