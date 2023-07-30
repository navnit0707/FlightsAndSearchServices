const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirportService extends CrudService {
  constructor() {
    const airportRespository = new AirportRepository();
    super(airportRespository);
  }
}
module.exports = AirportService;
