export class Person {
    firstname: string = ''
    lastname: string = ''
    private _age: number = 0
    static country: string = 'Thailand'
    setAge(age:number){
        this._age = age
    }
    getAge(): number {
        return this._age
    }
    getFullname(): string {
        return `${this.firstname} ${this.lastname}`
    }
}