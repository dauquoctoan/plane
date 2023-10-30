import { FindOptions } from "sequelize";
import { handleResultError, handleResultSuccess } from "src/helper/handleresult";
import { messageCreateFail, messageDeleteFail, messageFindFail, messageUpdateFail } from "src/helper/message.create";

export class BaseService<T>{
    constructor(
        public repository: any,
    ) { }

    async create(entity: any, isHandleResult = true): Promise<IResult<T> | any> {
        try {
            const result = await this.repository.create({ ...entity });
            return isHandleResult ? handleResultSuccess(result) : result;
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async creates(entity: any[], isHandleResult = true) {
        try {
            const result = this.repository.bulkCreate(entity);
            console.log(result);
            return isHandleResult ? handleResultSuccess(result) : result;
        } catch (error) {
            console.log('error', error)
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findAll(isHandleResult = true): Promise<IResult<T>> {
        try {
            const result = await this.repository.findAll();
            return isHandleResult ? handleResultSuccess(result) : result;
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findOneById(id: number | string, isHandleResult: boolean = true): Promise<IResult<T> | any> {
        try {
            const result: any = await this.repository.findOne({ where: { id } });
            return isHandleResult ? handleResultSuccess<IResult<T>>(result) : result;
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findOne(qeury: FindOptions<any>, isHandleResult: boolean = true): Promise<IResult<T> | any> {
        try {
            const result = await this.repository.findOne(qeury);
            return isHandleResult ? handleResultSuccess<IResult<T>>(result) : result;
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async updateById(id: number | string, teamUpdate: any, isHandleResult: boolean = true): Promise<IResult<T>> {
        try {
            const result = await this.repository.update(teamUpdate, { where: { id } })
            if (result[0] != 0) return isHandleResult ? handleResultSuccess(result[0]) : result;
            else handleResultError({ message: messageUpdateFail(this.repository.getTableName()) });
        } catch (error) {
            handleResultError({ message: messageUpdateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async removeById(id: number | string, isHandleResult = true): Promise<IResult<T>> {
        try {
            const result = await this.repository.destroy({ where: { id } });
            return isHandleResult ? handleResultSuccess(result) : result;
        } catch (error) {
            handleResultError({ message: messageDeleteFail(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }
}