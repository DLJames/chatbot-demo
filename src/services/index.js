import store from '../store'

export function searchByWords (text, count) {
  const context = store.state.conversationConext
  const url = `/chatbot/search?query=${text}&count=${count}&context=${context}`

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}
