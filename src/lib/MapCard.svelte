<script>
  import Map from './Map.svelte'
  import '@fontsource/material-icons'
  import Card, { Content, Media, MediaContent } from '@smui/card'
  import IconButton from '@smui/icon-button'
  import TextField from '@smui/textfield'
  import { decode } from 'pluscodes'

  let value = '8Q7XMPQG+3C'
  $: decoded = decode(value)
  $: invalid = decoded === null
  $: lat = invalid ? lat : decoded.latitude
  $: lon = invalid ? lon : decoded.longitude
</script>

<Card>
  <Media class="card-media-16x9" aspectRatio="16x9">
    <MediaContent>
      <Map height="100%" {lat} {lon}></Map>
    </MediaContent>
  </Media>
  <Content>
    <div style="display: flex;">
      <TextField
        bind:value
        {invalid}
        label="plus code"
        style="width: 100%;"
      ></TextField>
      <IconButton class="material-icons" style="margin: auto;">launch</IconButton>
    </div>
  </Content>
</Card>

<style></style>