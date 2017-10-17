import * as uuid from 'uuid/v4';

import { getRepository } from 'typeorm';
import { Card }          from 'entities/card';


export const createCardMutation = {
    async createCard(_, { card: attrs }) {
        const repository = getRepository(Card);
        const card = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(card);
        return card;
    }
};
