const testModule = {
    state: {
        test: '测试'
    },
    mutations: {
        setTest(state, val) {
            state.test = val;
        },
    },
    actions: {
        handleTest({ commit, dispatch }, data) {
            commit('setTest', data);
            dispatch('hhh');
        },
        hhh({ commit, state }){
          console.log(1)
        }
    },
    getters: {

    }
};

export default testModule;
