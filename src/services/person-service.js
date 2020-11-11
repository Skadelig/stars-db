import SwapiService from './swapi-service';

export default class PersonService {
    swapiService = new SwapiService();

    /**
     * Преобразовывает данные о персонаже
     * @param {*} person 
     */
    _transformPerson(person) {
        return {
            id: this.swapiService._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
            height: person.height,
            mass: person.mass,
            skinColor: person.skin_color,
            homeworld: person.homeworld,
        }
    }

    /**
     * Возвращает список всех персонажей
     */
    async getPeople() {
        const endpoint = `/people/`;
        const res = await this.swapiService.getResource(endpoint);

        return res.results.map((person) => this._transformPerson(person));
    }

    /**
     * Возвращает данные об одном персонаже
     * @param {*} id 
     */
    async getPersone(id) {
        const endpoint = `/people/${id}/`;
        const person = await this.swapiService.getResource(endpoint);

        return this._transformPerson(person);
    }
}