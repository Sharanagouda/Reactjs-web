import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "./../actionType";

const initialState = [
    {id:1, title:"Apple", description:" some red apples", price:200},
    {id:2, title:"Oranges", description:" some red apples", price:80},
    {id:3, title:"Banana", description:" some yellow color Banana", price:20},
    {id:4, title:"Pototos", description:" some red Pototos", price:100},
    {id:5, title:"Onions", description:" some red Onions", price:50},
    {id:6, title:"Ginger", description:" some  Ginger", price:20},
    {id:7, title:"Carate", description:" some red Carate", price:70},
    {id:8, title:"Mango", description:" some sweet Mango", price:60},
    {id:9, title:"pineapple", description:" some yellow pineapple", price:40},
];

export default function productReducer(state=initialState, action={}){

    switch(action.type){
        case ADD_PRODUCT:
        return state.concate(action.payload);

        case DELETE_PRODUCT:
        let indexToDel = findProductIndex(state, action.payload.id);
        return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case UPDATE_PRODUCT:
        let indexToUpdate = findProductIndex(state, action.payload.id);
        const newProductExtend = {
            ...state[indexToUpdate], title: action.payload.title
        };
        return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];
    
        default:
        return state;
    }
    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }
}