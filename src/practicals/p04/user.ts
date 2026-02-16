export class User {
    public username: string = ''
    public password: string = ''
    public LOGIN_ATTEMPTS: number = 0
    constructor (username:string, password:string){
        this.username = username
        this.password = password
    }
    public login(password:string):boolean{
        this.LOGIN_ATTEMPTS++
        return this.validPassword(password)
    }
    private validPassword(password:string):boolean{
        return this.password === password
    }
    public getLoginAttempts():number{
        return this.LOGIN_ATTEMPTS
    }
}
