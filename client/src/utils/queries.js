import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUserss {
    profiles {
      _id
      username
      email
      savedBooks
    }
  }
`;


