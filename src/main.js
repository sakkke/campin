import App from './App.svelte'

(async () => {
  const target = document.getElementById('app')

  if (process.env.NODE_ENV === 'development') {
    const { main } = await import('./dev')
    main(target)
  }

  new App({ target })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('./sw.js', import.meta.url))
  }
})()