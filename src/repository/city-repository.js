
//index js returns all the module available in model folder by deafault
 const {City } = require('../models/index');

 class CityRepository{
    async createCity({name}){
        try{
            const city = await CityRepository.crete({name});
            return city
        } catch(error){
            throw {error};
        }
    }
    async deleteCity({cityId}){
        try{
            await City.destroy({
                where: {
                    id:cityId
                }
            });
        }catch(error){
            throw {error};

        }
    }
 }

 module.exports = CityRepository;