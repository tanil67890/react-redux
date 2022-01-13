import * as actionTypes from './recipies-types';

const INITIAL_STATE = {
  foodItems: [
    {
      id: 1,
      type: "donut",
      name: "Choclate Iced Cake",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 6,
      img: "https://i0.wp.com/randysdonuts.com/wp-content/uploads/2022/01/26.png?w=600&ssl=1",
      ingredients: [
        "540g All-purpose flour",
        "20g Fresh yeast",
        "150g Icing sugar",
        "20g salt",
        "Peanut oil",
        "3-4 teaspoons milk",
        "2 teaspoons vanilla extract",
      ],
    },
    {
      id: 2,
      type: "donut",
      name: "Glazed Raised",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 9.99,
      img: "https://i0.wp.com/randysdonuts.com/wp-content/uploads/2022/01/2.png?w=600&ssl=1",
      ingredients: [
        "540g All-purpose flour",
        "20g Fresh yeast",
        "150g Icing sugar",
        "20g salt",
        "Peanut oil",
        "3-4 teaspoons milk",
        "2 teaspoons vanilla extract",
      ],
    },
    {
      id: 3,
      type: "donut",
      name: "Cinnamon Crumb Cake",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 7,
      img: "https://i0.wp.com/randysdonuts.com/wp-content/uploads/2022/01/32.png?w=600&ssl=1",
      ingredients: [
        "540g All-purpose flour",
        "20g Fresh yeast",
        "150g Icing sugar",
        "20g salt",
        "Peanut oil",
        "3-4 teaspoons milk",
        "2 teaspoons vanilla extract",
      ],
    },
    {
      id: 4,
      type: "donut",
      name: "Sprinkled Iced Cake",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 8,
      img: "https://i0.wp.com/randysdonuts.com/wp-content/uploads/2022/01/36.png?w=600&ssl=1",
      ingredients: [
        "540g All-purpose flour",
        "20g Fresh yeast",
        "150g Icing sugar",
        "20g salt",
        "Peanut oil",
        "3-4 teaspoons milk",
        "2 teaspoons vanilla extract",
      ],
    },
    {
      id: 5,
      type: "donut",
      name: "Vanilla Iced Cake",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 8,
      img: "https://i0.wp.com/randysdonuts.com/wp-content/uploads/2022/01/25.png?w=600&ssl=1",
      ingredients: [
        "540g All-purpose flour",
        "20g Fresh yeast",
        "150g Icing sugar",
        "20g salt",
        "Peanut oil",
        "3-4 teaspoons milk",
        "2 teaspoons vanilla extract",
      ],
    },
  ],
  favFoodItems: [],
  newFoodItem: null,
};

const recipiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_FAV:
            const item = state.foodItems.find(x => x.id === action.payload.id);
            const isFav = state.favFoodItems.find(y => y.id === action.payload.id ? true : false);
            return {
                ...state,
                favFoodItems: isFav ? state.favFoodItems : state.favFoodItems.concat(item),
            }
        case actionTypes.REMOVE_RECIPE:
            return {
                ...state,
                foodItems: state.foodItems.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.ADD_NEW_RECIPE:
          const invalidItem = state.favFoodItems.find(item => item.id === action.payload.id ? true : false);
            return{
                ...state,
                foodItems: invalidItem ? alert("Item is invalid") : state.foodItems.concat(action.payload),
            }
        default :
            return state;
    }
};

export default recipiesReducer;