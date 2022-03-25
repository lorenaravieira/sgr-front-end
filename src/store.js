import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'

Vue.use(Vuex)

const estado = {
    token: localStorage.getItem('token') || null,
    usuario: localStorage.getItem('usuario') || {},
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
        state.token = token
        state.usuario = usuario
    },
    DESLOGAR_USUARIO(state) {
        state.token = null
        state.usuario = {}
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
    }
}

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth', usuario)
                .then(response => {
                    localStorage.setItem('usuario', response.data.user);
                    localStorage.setItem('token', response.data.token);
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.token,
                        usuario: response.data.user
                    })
                    resolve(response.data)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}

const getters = {
    usuarioEstaLogado : state => Boolean(state.token)
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions,
    getters
})
