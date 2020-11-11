/**
 * Сервис для работы с api
 */
export default class swapiService {
    /**
     * 
     */
    _urlBase = 'https://swapi.dev/api';

    /**
     * Извлекает ID
     * @param {*} planet 
     */
    _extractId(element) {
        const idRegExp = /\/([0-9]*)\/$/;
        return element.url.match(idRegExp)[1];
    }

    /**
     * Получает данные с ресурса
     * @param {*} url 
     */
    async getResource(url) {
        const res = await fetch(`${this._urlBase}${url}`);

        if (!res.ok) {
            throw new Error(`${url} not found, recieved ${res.status}`);
        }

        return await res.json();
    }
}
