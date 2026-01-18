import nedb from '@seald-io/nedb';

export class AsyncDB {
    constructor(private db: nedb) {}

    async find(query?: any, projection?: any): Promise<any> {
        return await this.db.findAsync(query, projection);
    }

    async update(query: any, updateQuery: any, options: any = {}) {
        return await this.db.updateAsync(query, updateQuery, options);
    }

    async findOne(query: any, projection?: any): Promise<any> {
        return await this.db.findOneAsync(query, projection);
    }

    async count(query: any): Promise<number> {
        return await this.db.countAsync(query);
    }

    async insert(doc: any): Promise<any> {
        return await this.db.insertAsync(doc);
    }

    async remove(query: any, options: any = {}): Promise<number> {
        return await this.db.removeAsync(query, options);
    }

    async getAll(): Promise<any> {
        return await this.db.getAllData();
    }
}
