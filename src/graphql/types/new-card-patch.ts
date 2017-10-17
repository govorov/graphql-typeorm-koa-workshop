export const NewCardPatch = `
    input NewCardPatch {
        # title is required
        title       : String!
        description : String
        done        : Boolean
    }
`;
