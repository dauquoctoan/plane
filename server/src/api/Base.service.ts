import { handleResultError, handleResultSuccess } from "src/helper/handleresult";
import { messageCreateFail, messageDeleteFail, messageFindFail, messageUpdateFail } from "src/helper/message.create";

export class BaseService {
    constructor(
        public repository: any,
    ) { }

    async create(entity: any): Promise<IResult> {
        try {
            const result = await this.repository.create({ ...entity });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findAll(): Promise<IResult> {
        try {
            const result = await this.repository.findAll();
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findOne(condition: any): Promise<IResult> {
        try {
            const result = await this.repository.findOne({ where: { ...condition } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async updateById(id: number, teamUpdate: any): Promise<IResult> {
        try {
            const result = await this.repository.update(teamUpdate,
                { where: { id } })
            if (result[0] != 0) return handleResultSuccess(result[0]);
            else handleResultError({ message: messageUpdateFail(this.repository.getTableName()) });
        } catch (error) {
            handleResultError({ message: messageUpdateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async removeById(id: number): Promise<IResult> {
        try {
            const result = await this.repository.destroy({ where: { id } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageDeleteFail(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }
}