import { handleResultError, handleResultSuccess } from "src/helper/handleresult";
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from "src/helper/message.create";

export class BaseService {
    constructor(
        public repository: any,
    ) { }

    async create(entity: any): Promise<IResult> {
        try {
            const result = await this.repository.create({ ...entity });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageCreateErorr(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }

    async findAll(): Promise<IResult> {
        try {
            const result = await this.repository.findAll();
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindErorr(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }

    async findOne(condition: any): Promise<IResult> {
        try {
            const result = await this.repository.findOne({ where: { ...condition } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindErorr(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }

    async updateById(id: number, teamUpdate: any): Promise<IResult> {
        try {
            const result = await this.repository.update({
                teamUpdate
            },
                { where: { id } })
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageUpdateErorr(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }

    async removeById(id: number): Promise<IResult> {
        try {
            const result = await this.repository.destroy({ where: { id } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageDeleteErorr(`[${`[${this.repository.getTableName()}]`}]`), messageDetail: error });
        }
    }
}