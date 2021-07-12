/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateStandardInput = {
  id?: string | null;
  coaches?: Array<CoachInput | null> | null;
};

export type CoachInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  niche?: string | null;
  city?: string | null;
  email?: string | null;
  phone?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
};

export type ModelStandardConditionInput = {
  and?: Array<ModelStandardConditionInput | null> | null;
  or?: Array<ModelStandardConditionInput | null> | null;
  not?: ModelStandardConditionInput | null;
};

export type Standard = {
  __typename: "Standard";
  id: string;
  coaches?: Array<Coach | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type Coach = {
  __typename: "Coach";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  niche?: string | null;
  city?: string | null;
  email?: string | null;
  phone?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
};

export type UpdateStandardInput = {
  id: string;
  coaches?: Array<CoachInput | null> | null;
};

export type DeleteStandardInput = {
  id: string;
};

export type ModelStandardFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelStandardFilterInput | null> | null;
  or?: Array<ModelStandardFilterInput | null> | null;
  not?: ModelStandardFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStandardConnection = {
  __typename: "ModelStandardConnection";
  items?: Array<Standard | null> | null;
  nextToken?: string | null;
};

export type CreateStandardMutation = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStandardMutation = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStandardMutation = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type GetStandardQuery = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStandardsQuery = {
  __typename: "ModelStandardConnection";
  items?: Array<{
    __typename: "Standard";
    id: string;
    coaches?: Array<{
      __typename: "Coach";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      niche?: string | null;
      city?: string | null;
      email?: string | null;
      phone?: string | null;
      facebookUrl?: string | null;
      instagramUrl?: string | null;
      youtubeUrl?: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateStandardSubscription = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStandardSubscription = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStandardSubscription = {
  __typename: "Standard";
  id: string;
  coaches?: Array<{
    __typename: "Coach";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    niche?: string | null;
    city?: string | null;
    email?: string | null;
    phone?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    youtubeUrl?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStandard(
    input: CreateStandardInput,
    condition?: ModelStandardConditionInput
  ): Promise<CreateStandardMutation> {
    const statement = `mutation CreateStandard($input: CreateStandardInput!, $condition: ModelStandardConditionInput) {
        createStandard(input: $input, condition: $condition) {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStandardMutation>response.data.createStandard;
  }
  async UpdateStandard(
    input: UpdateStandardInput,
    condition?: ModelStandardConditionInput
  ): Promise<UpdateStandardMutation> {
    const statement = `mutation UpdateStandard($input: UpdateStandardInput!, $condition: ModelStandardConditionInput) {
        updateStandard(input: $input, condition: $condition) {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStandardMutation>response.data.updateStandard;
  }
  async DeleteStandard(
    input: DeleteStandardInput,
    condition?: ModelStandardConditionInput
  ): Promise<DeleteStandardMutation> {
    const statement = `mutation DeleteStandard($input: DeleteStandardInput!, $condition: ModelStandardConditionInput) {
        deleteStandard(input: $input, condition: $condition) {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStandardMutation>response.data.deleteStandard;
  }
  async GetStandard(id: string): Promise<GetStandardQuery> {
    const statement = `query GetStandard($id: ID!) {
        getStandard(id: $id) {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStandardQuery>response.data.getStandard;
  }
  async ListStandards(
    filter?: ModelStandardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStandardsQuery> {
    const statement = `query ListStandards($filter: ModelStandardFilterInput, $limit: Int, $nextToken: String) {
        listStandards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            coaches {
              __typename
              id
              firstName
              lastName
              niche
              city
              email
              phone
              facebookUrl
              instagramUrl
              youtubeUrl
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStandardsQuery>response.data.listStandards;
  }
  OnCreateStandardListener: Observable<
    SubscriptionResponse<OnCreateStandardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStandard {
        onCreateStandard {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateStandardSubscription>>;

  OnUpdateStandardListener: Observable<
    SubscriptionResponse<OnUpdateStandardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStandard {
        onUpdateStandard {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateStandardSubscription>>;

  OnDeleteStandardListener: Observable<
    SubscriptionResponse<OnDeleteStandardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStandard {
        onDeleteStandard {
          __typename
          id
          coaches {
            __typename
            id
            firstName
            lastName
            niche
            city
            email
            phone
            facebookUrl
            instagramUrl
            youtubeUrl
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteStandardSubscription>>;
}
