import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    isMenuDisplay: false,
    isDialogDisplay: false,
    isAlertDisplay: false,
    isLoginDisplay: true,
    dialogFrom: 'menu',
    conversationConext: '{}'
  },
  mutations: {
    closeMenu (state) {
      state.isMenuDisplay = false
    },
    openMenu (state) {
      state.isMenuDisplay = true
    },
    closeDialog (state) {
      state.isDialogDisplay = false
    },
    openDialog (state) {
      state.isDialogDisplay = true
    },
    closeAlert (state) {
      state.isAlertDisplay = false
    },
    openAlert (state) {
      state.isAlertDisplay = true
    },
    hideLogin (state) {
      state.isLoginDisplay = false
    },
    updateDialogFrom (state, from) {
      state.dialogFrom = from
    },
    setConversationConext (state, context) {
      state.conversationConext = context
    },
    getConversationConext (state) {
      return state.conversationConext
    }
  }
})
