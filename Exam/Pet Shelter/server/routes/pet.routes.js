const PetController = require("../controllers/pet.controller");


module.exports = function (app) {
    app.get("/api/pets", PetController.list);
    app.post("/api/pets", PetController.create);
    app.get("/api/pets/:id", PetController.detail);
    app.put("/api/pets/:id", PetController.update);
    app.delete("/api/pets/:id", PetController.delete);
}