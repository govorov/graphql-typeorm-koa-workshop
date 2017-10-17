import { Card } from 'graphql/types/card';
import { CardPatch } from 'graphql/types/card-patch';
import { NewCardPatch } from 'graphql/types/new-card-patch';


export const types = [
    Card,
    CardPatch,
    NewCardPatch, // <-- add type here
];
