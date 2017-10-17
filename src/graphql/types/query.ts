export const Query = `
    type Query {
        cards: [Card]
        card(id: String!): Card
    }
`;
