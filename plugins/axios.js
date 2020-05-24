export default function({ $axios, redirect }) {
  $axios.setHeader('Authorization', `3W4o#Ib3%HUGpoQGjXm8Lh`)
  $axios.setHeader('Content-Type', 'application/json')
  $axios.onRequest(() => {})

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
