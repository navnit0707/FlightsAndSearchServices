const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flghtRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneID
      );
      const flight = await this.FlightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong at flight service layer");
      throw { error };
    }
  }

  async getFlightData() {}

  // future update
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price
 *  totalSeats -> airplane
 * }
 */
