import { cardResolver }  from 'graphql/resolvers/card';
import { cardsResolver } from 'graphql/resolvers/cards';

import { toggleCardMutation } from 'graphql/mutations/toggle-card';
import { updateCardMutation } from 'graphql/mutations/update-card';
import { createCardMutation } from 'graphql/mutations/create-card';


export const resolvers = {
    Query: {
        ...cardsResolver,
        ...cardResolver,
    },

    Mutation: {
        ...toggleCardMutation,
        ...updateCardMutation,
        ...createCardMutation, // <-- add mutation to schema
    },
};
