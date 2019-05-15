const axios = require('axios');

//graphql objects here

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat
} = require('graphql');

//anything we will need for getting data from other database
//names should match up

const players = new GraphQLObjectType({
  name: 'Players',
  fields: () => ({
    uid: { type: GraphQLString },
    username: { type: GraphQLString }
  })
});

const stats = new GraphQLObjectType({
  name: 'Stats',
  fields: () => ({
    accountId: { type: GraphQLString },
    epicName: { type: GraphQLString },
    seasonWindow: { type: GraphQLString },
    fnApiId: { type: GraphQLInt },
    data: { type: KeyboardMouse }
  })
});
const KeyboardMouse = new GraphQLObjectType({
  name: 'KeyboardMouse',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    keyboardmouse: { type: Comp }

    //...
  })
});
const Comp = new GraphQLObjectType({
  name: 'Comp',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    comp: { type: Solo }

    //...
  })
});
const Solo = new GraphQLObjectType({
  name: 'Solo',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    solo: { type: Solo1 }

    //...
  })
});
const Solo1 = new GraphQLObjectType({
  name: 'Solo1',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    placetop1: { type: GraphQLInt },
    placetop10: { type: GraphQLInt }

    //...
  })
});
const Outfit = new GraphQLObjectType({
  name: 'Items',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    identifier: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    cost: { type: GraphQLInt },
    rarity: { type: GraphQLString },
    //...
    //creating object and getting more info from data base
    images: { type: OutfitImage },
    ratings: { type: OutfitRatings }
  })
});
const OutfitImage = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    transparent: { type: GraphQLString }

    //...
  })
});

const OutfitRatings = new GraphQLObjectType({
  name: 'Ratings',
  fields: () => ({
    //creating fields that you need from the data base
    //name and type
    avgStars: { type: GraphQLFloat },
    totalPoints: { type: GraphQLInt }
    //...
  })
});

// Root Query

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Outfits: {
      type: new GraphQLList(Outfit),
      resolve(parent, args) {
        return axios
          .get(
            'https://fortnite-public-api.theapinetwork.com/prod09/items/list'
          )
          .then(res => res.data);
      }
    },
    Outfit: {
      type: Outfit,
      args: {
        identifier: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
              args.identifier
            }`
          )
          .then(res => res.data);
      }
    },
    Player: {
      type: players,
      args: {
        username: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${
              args.username
            }`
          )
          .then(res => res.data);
      }
    },
    Stats: {
      type: stats,
      args: {
        accountId: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${
              args.accountId
            }`
          )
          .then(res => res.data);
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery
});
