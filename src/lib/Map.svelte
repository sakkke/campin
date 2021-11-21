<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import icon from 'leaflet/dist/images/marker-icon.png'
  import iconShadow from 'leaflet/dist/images/marker-shadow.png'
  import { onMount } from 'svelte'

  L.Marker.prototype.options.icon = L.icon({
    iconAnchor:  [12, 41],
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  export let height = '360px'
  export let lat = 35.710113 // latitude
  export let lon = 139.810703 // longitude
  export let marked = false
  export let width = 'auto'
  export let zoom = 18

  let map

  $: {
    lat, lon
    if (map) map.setView(new L.LatLng(lat, lon))
  }

  const id = `map-${Math.random().toString(36)}`

  onMount(() => {
    map = L.map(id, {
      center: [lat, lon],
      zoom,
    })
    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
      .addTo(map)

    if (marked) {
      L
        .marker([lat, lon])
        .addTo(map)
    }
  })
</script>

<div {id} style="height: {height}; width: {width};"></div>

<style></style>