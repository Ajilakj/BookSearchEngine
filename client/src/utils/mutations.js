import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String!,$image: String!, $link: String!,$title: String!) { {
      _id
      authors
      description
      image
      link
      title
    }
  }
`;
