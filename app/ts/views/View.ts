export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;
    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
    }

    update(model: T) {

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}
