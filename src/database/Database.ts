export default abstract class DataBase<T>{
    abstract get():Promise<T[]>;
    abstract findById(id: number):Promise<T>;
    abstract add(object: T):Promise<void>;
    abstract delete(id:number):Promise<void>;
    abstract update(object:T):Promise<void>;
}