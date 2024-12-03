import AxiosUtil from "../utils/axios-util";

export default class TechnologyActions extends AxiosUtil {
    fetchTechnologies() {
        return this.get('technologies');
    }
    createTechnology(name, resource) {
        return this.post('technologies', {name, resource});
    }
}