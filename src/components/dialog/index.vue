<template src="./template.html"></template>
<script>
  import { ChatUI } from '@/assets/lib/chat-ui/chat-ui'
  import { searchByWords } from '@/services'
  import Card from './components/card'
  console.log(Card)
  const CardComponent = Vue.extend(Card)

  export default {
    data () {
      return {
        referred: {
          clickedIndex: -1,
          _lastIndex: 0,
          questions: [],
          needQuery: false
        }
      }
    },
    computed: {
      isDialogDisplay: function () {
        return this.$store.state.isDialogDisplay
      },

      dialogFrom: function () {
        return this.$store.state.dialogFrom
      }
    },
    watch: {
      isDialogDisplay: function (now, old) {
        if (now) {
          this.chat.trigger('open-chat')
        } else {
          this.chat.trigger('close-chat')
        }
      },

      dialogFrom: function (now, old) {
        if (now === 'alert') {
          // Dialog is triggered from Alert
          this.showMessage('chat', '<h4>Below are the contents recommended to you:</h4><span style="color: #999999;"><strong>Result base on your</strong>: Clients\'s metrics, Locale and Industry.<br /><strong>Keywords:</strong> <a>IBM Cloud</a>, <a>Watson Marketing</a>, <a>Healthcare</a>, <a>Cognitive systems</a></span>')
          this.onDialogSubmit('IBM Healthcare Cloud', 5)
          // this.onDialogSubmit('rep page', 1)
        } else {

        }
      }
    },
    methods: {
      onDialogClosed () {
        this.$store.commit('closeDialog')
        this.$store.commit('openMenu')
        this.$store.commit('openAlert')
      },

      onDialogSubmit (msg, count = 1) {
        this.chat.trigger('is-typing')
        document.querySelector('.chat-ui-input__input-field').value = ''

        searchByWords(msg, count).then(res => {
          const results = res.results
          let i = 0
          const len = results.length
          let msgHTMML = ''

          if (!len) {
            this.showMessage('chat', 'Sorry, no related content found, please try with other keywords.')
          } else {
            this.$store.commit('setConversationConext', JSON.stringify(results[0].context))
            while (i < len) {
              let cp = new CardComponent({
                propsData: results[i]
              })
              cp.$mount()

              msgHTMML += cp.$el.outerHTML
              i++
            }

            this.showMessage('chat', msgHTMML)
          }
        })
      },

      // Show message in chat dialog list
      showMessage (side, message) {
        // side can be: 'user' or 'chat'
        this.chat.trigger('add-phrase', {side, message})
      }
    },
    mounted () {
      console.log(1)
      var chat = this.chat = ChatUI({
        title: 'CSA Assistant',
        avatar: '',
        subtitle: 'Anytime, anywhere to solve your problem on CSA.',
        inputPlaceholder: 'Enter your question.'
      }).render(this.$el)

      chat.on('chat-closed', this.onDialogClosed.bind(this))
      chat.on('user-send-message', this.onDialogSubmit.bind(this))
    }
  }
</script>
<style src="./style.css"></style>
<style>
  #chat-ui-dialog {
    overflow-x: hidden;
  }
  
  #chat-ui-header .chat-ui-header__image {
    border-radius: 0;
    border: none;
  }
  
  .chat-ui-header__image {
    background-size: 100% !important;
    background-repeat: no-repeat;
  }
  
  #chat-ui-header .chat-ui-header__cell_title {
    padding-left: 10px;
  }
  
  #chat-ui-header .chat-ui-header__subtitle {
    font-size: 13px;
    color: #E0E0E0;
  }
  
  #chat-ui-mainframe {
    width: 600px;
    height: 100%;
    font-size: 14px;
  }
  
  .chat-ui-dialog-bubble-container {
    margin: 1rem 0;
  }
  
  .chat-ui-dialog-bubble-container img {
    max-width: 420px;
    height: auto;
  }
</style>