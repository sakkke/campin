<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import { onMount } from 'svelte'

  export let height = '360px'
  export let lat = 35.710113 // latitude
  export let lon = 139.810703 // longitude
  export let width = 'auto'
  export let zoom = 18

  const id = `map-${Math.random().toString(36)}`

  onMount(() => {
    const map = L.map(id, {
      center: [lat, lon],
      zoom,
    })
    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
      .addTo(map)
  })
</script>

<div {id} style="height: {height}; width: {width};"></div>

<style></style>