import apartments_data from '../../../entities.json'

export default {
    namespaced: true,
    state: {
        all_apartments: apartments_data.response,
        liked_apartments: []
    },
    actions: {
       LIKE_CARD({commit}, id_apartment){
           commit('TOGGLE_LIKE', id_apartment)
       }
    },
    mutations: {
        TOGGLE_LIKE(state, id_apartment){
            if(state.liked_apartments.includes(id_apartment)){
                state.liked_apartments = state.liked_apartments.filter(ind => ind != id_apartment)
            }else{
                state.liked_apartments.push(id_apartment)
            }
        }
    },
    getters: {
        all_apartments: (state) => state.all_apartments,
        liked_apartments: (state) => state.liked_apartments
    },
}