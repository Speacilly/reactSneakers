import { gql } from "@apollo/client";

export  const Create_One_Product = gql`
mutation CreateOneProduct($data: ProductCreateInput) {
    createOneProduct(data: $data) {
      id
      name
      type
      price
      description
      qty
    }
  }
`