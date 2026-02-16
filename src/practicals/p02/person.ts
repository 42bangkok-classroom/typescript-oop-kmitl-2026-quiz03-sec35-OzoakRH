export class Person {
    firstname: string = ''
    lastname: string = ''
    private age: number = 0
    static COUNTRY: string = 'Thailand'
    setAge(age:number){
        this.age = age
    }
    getAge(): number {
        return this.age
    }
    getFullName(): string {
        return `${this.firstname} ${this.lastname}`
    }
}