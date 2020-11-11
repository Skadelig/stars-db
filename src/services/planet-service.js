import SwapiService from './swapi-service';

export default class PlanetService {
    swapiService = new SwapiService();

    /**
     * Преобразовывает данные о планете
     * @param {*} planet 
     */
    _transformPlanetData(planet) {
        return {
            id: this.swapiService._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            gravity: planet.gravity,
            climate: planet.climate,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water,
        }
    }

    /**
     * Возвращает список всех планет
     */
    async getAllPlanets() {
        const endpoint = `/planets/`;
        const res = await this.swapiService.getResource(endpoint);

        return res.results.map((planet) => this._transformPlanetData(planet));
    }

    /**
     * Возвращает данные о планете
     * @param {*} id 
     */
    async getPlanet(id) {
        const endpoint = `/planets/${id}/`;
        const planet = await this.swapiService.getResource(endpoint);
        
        return this._transformPlanetData(planet);
    }
}