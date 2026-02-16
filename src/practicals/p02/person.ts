export class Person {
    firstname: string = ''
    lastname: string = ''
    private _age: number = 0
    static COUNTRY: string = 'Thailand'
    setAge(age:number){
        this._age = age
    }
    getAge(): number {
        return this._age
    }
    getFullName(): string {
        return `${this.firstname} ${this.lastname}`
    }
}