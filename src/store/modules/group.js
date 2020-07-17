import { getGroup, saveGroup, updateGroup, deleteGroup } from '../../api/api'

const group = {
  namespaced: true,
  state: () => ({
    groupList: []
  }),
  getters: {
    getGroupNameByGroupId: (state) => (groupId) => {
      let groupName = ''
      state.groupList.forEach((group) => {
        if (group.groupId === groupId) {
          groupName = group.groupName
        }
      })
      return groupName
    }
  },

  mutations: {
    getGroup(state, groupList) {
      state.groupList = groupList || []
    },
    addGroup(state, group) {
      state.groupList.push(group)
    },
    updateGroup(state, payload) {
      state.groupList.splice(payload.index, 1, payload.group)
    },
    deleteGroup(state, groupId) {
      state.groupList = state.groupList.filter((group) => group.groupId !== groupId)
    }
  },
  actions: {
    getGroupAsync({ commit }) {
      getGroup().then((res) => {
        commit('getGroup', res.data)
      })
    },

    async addGroupAsync({ commit }, payload) {
      const res = await saveGroup(payload)
      if (res.code === 0 && !!res.data) {
        commit('addGroup', res.data)
      }
      return res
    },

    async updateGroupAsync({ commit }, request) {
      const res = await updateGroup(request.group)
      if (res.code === 0) {
        commit('updateGroup', request)
      }
      return res
    },

    async deleteGroupAsync({ commit }, groupId) {
      const res = await deleteGroup({ groupId: groupId })
      if (res.code === 0) {
        commit('deleteGroup', groupId)
      }
      return res
    }
  }
}

export default group
