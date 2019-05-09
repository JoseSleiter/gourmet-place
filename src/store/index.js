import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showModal: false,
    },


    mutations: {
        mtShowModal(state){
            state.showModal = !state.showModal;
        },

    },

    actions: {
        atSetShowModal: ({state, commit}) =>{
            commit('mtShowModal')
        }
    }
})  