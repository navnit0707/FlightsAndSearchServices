//index js returns all the module available in model folder by deafault
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Somthing went wrong in the repository layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Somthing went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Somthing went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Somthing went wrong in the repository layer");
      throw { error };
    }
  }

  /**
   * implemented get All cities in repository layer ,
   *  and it will be consumed in service layer , and in model , it will
   *  be exported so that can be used in routes
   */
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Somthing went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
