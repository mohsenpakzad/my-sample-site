import axios from 'axios';

export const state = () => ({
  jokes: [],
});

export const getters = {
  getJokes: (state) => state.jokes,
};


export const actions = {
    async fetchJokes({commit}) {

      const config = {
        headers: {
          Accept: 'application/json'
        }
      };

      try {
        const response = await axios.get('https://icanhazdadjoke.com/search', config);
        commit('setJokes', response.data.results);
      } catch (err) {
        console.log(err);
      }
    },
    async searchJokes({commit}, query) {

      const config = {
        headers: {
          Accept: 'application/json'
        }
      };

      try {
        const response = await axios.get(`https://icanhazdadjoke.com/search?term=${query}`, config);
        commit('setJokes', response.data.results)
      } catch (err) {
        console.log(err);
      }
    }

};


export const mutations = {
  setJokes: (state, jokes) => state.jokes = jokes
};
