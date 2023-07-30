const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any of the body params is missing we come inside the if

    return res.status(400).json({
      data: {},

      success: false,

      message: "Invalid request body for create flight",

      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};

/**
 * importance of middlewares layer:
 *  middleware handel the actual api contract that is good or not,
 * in middleware we generally keep the fact that teh body that is expected
 * are the only we are sending or not
 *
 *  in that body the data may be  have some ambiguity or malware we can check it in
 *  either middleware or service layer
 *
 */
