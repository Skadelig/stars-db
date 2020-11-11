import SwapiService from './swapi-service';

export default class StarshipService {
    swapiService = new SwapiService();

    /**
     * Возвращает список кораблей
     */
    async getAllStarships() {
        const endpoint = `/starships/`;
        const res = await this.swapiService.getResource(endpoint);

        return res.results.map((starship) => this._transformStarship(starship));
    }

    /**
     * Возвращает данные о корабле
     * @param {*} id 
     */
    async getStarship(id) {
        const endpoint = `/starships/${id}/`;
        const starship = await this.swapiService.getResource(endpoint);

        return this._transformStarship(starship);
    }

    /**
     * Возвращает данные о карабле
     * @param {*} starship 
     */
    _transformStarship(starship) {
        return {
            id: this.swapiService._extractId(starship),
            name: starship.name,
            model: starship.model,
            starshipClass: starship.starship_class,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            maxAtmosperingSpeed: starship.max_atmosphering_speed,
            hyperdriveRating: starship.hyperdrive_rating,
            mglt: starship.MGLT,
            cargoCapacity: starship.cargo_capacity,
            consumables: starship.consumables,
        }
    }
}