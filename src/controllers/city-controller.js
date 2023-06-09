const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully Created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: err,
    });
  }
};

// GET-> /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

//Patch -> /city/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

//GET -> get all cities

const getAll = async (req, res) => {
  try {
    console.log(req.params);
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the city",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};

/*
 *  data Flow :-
 *  - controller -> service  to apply
 *  - business logic-> call repositry to intract db
 * The use cses of controller is request comes to controller,
 *  then controller  pass all the req data to serice & repositorylayer,
 *  they will process somehow and return to controller , controller will form
 * res structure and send it to user
 */
