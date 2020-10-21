export class User {

    private _id : number;
    private _nom : string;
    private _prenom : string;

    constructor(id: number, nom : string, prenom : string) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
    }

    get nom() {
        return this._nom;
    }

    get prenom() {
        return this._prenom;
    }

    set nom(nom : string) {
        this._nom = nom;
    }

    set prenom(prenom : string) {
        this._prenom = prenom;
    }
}