import Updater from "./Updater";

export default class {
    static render(component, element) {
        const updater = new Updater(element);
        component.updater = updater;
        updater.update(component.render());
    }
}
