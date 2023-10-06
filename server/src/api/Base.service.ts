import { handleResultError, handleResultSuccess } from "src/helper/handleresult";
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from "src/helper/message.create";

export class BaseService<Entity> {
    constructor(
        public repository: any,
    ) { }

    async create(entity: any): Promise<IResult> {
        try {
            const result = await this.repository.create({ ...entity });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageCreateErorr(''), messageDetail: error });
        }
    }

    async findAll(): Promise<IResult> {
        try {
            const result = await this.repository.findAll();
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindErorr(''), messageDetail: error });
        }
    }

    async findOne(condition: any): Promise<IResult> {
        try {
            const result = await this.repository.findOne({ where: { ...condition } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageFindErorr('Team'), messageDetail: error });
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
            handleResultError({ message: messageUpdateErorr(''), messageDetail: error });
        }
    }

    async removeById(id: number): Promise<IResult> {
        try {
            const result = await this.repository.destroy({ where: { id } });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: messageDeleteErorr(''), messageDetail: error });
        }
    }
}