import { getRepository } from 'typeorm';
import { Card }          from 'entities/card';


export const cardResolver = {
    async card(obj, { id }, context, info) {
        const repository = getRepository(Card);
        return await repository.findOne({ id });
    }
};
