import { gql } from "@apollo/client";

export  const PRODUCTS = gql`
query Products {
    products {
      id
      name
      type
      price
      description
      qty
    }
  }
`