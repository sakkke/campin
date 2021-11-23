<script>
  import { activeCamp, campingTime, finishTime, pluscodes, stats } from '../stores'
  import Map from './Map.svelte'
  import '@fontsource/bevan'
  import '@fontsource/material-icons'
  import Card, { Content, Media, MediaContent } from '@smui/card'
  import LinearProgress from '@smui/linear-progress'
  import IconButton from '@smui/icon-button'
  import TextField from '@smui/textfield'
  import Icon from '@smui/textfield/icon'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import { decode } from 'pluscodes'

  let progress = 0
  let value = '8Q7XMPQG+3C'
  $: camping = !!$activeCamp || !!$finishTime
  $: decoded = decode(value)
  $: invalid = decoded === null
  $: lat = invalid ? lat : decoded.latitude
  $: lon = invalid ? lon : decoded.longitude

  function stopCamp () {
    $activeCamp = 0
    $finishTime = 0
  }

  setInterval(() => {
    if (!!$finishTime && $activeCamp === index) {
      if (!(progress > 1)) {
        progress = 1 - ($finishTime - Date.now()) / $campingTime
      } else {
        if (!$pluscodes.includes(value)) $pluscodes = [...$pluscodes, value]
        $stats = [...$stats, {
          pluscode: value,
          startTime: $finishTime - $campingTime,
          finishTime: $finishTime,
        }]
        stopCamp()
      }
    }
  }, 10 * 1000 /* seconds */)
  
  export let index = 0
  export { value as pluscode }
</script>

<Card style="overflow: hidden;">
  {#if !!$finishTime && $activeCamp === index}
    <Media class="camp-cover card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <span class="pluscode-cover">{value}</span>
      </MediaContent>
    </Media>
    <Content style="height: 56px /* computed */;">
      <div style="display: flex;">
        <LinearProgress {progress} style="margin: auto;"></LinearProgress>
        <Wrapper>
          <IconButton
            class="material-icons"
            on:click={() => stopCamp()}
            style="margin: auto;"
          >cancel</IconButton>
          <Tooltip>Stop camp</Tooltip>
        </Wrapper>
      </div>
    </Content>
  {:else}
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <Map height="100%" {lat} {lon} marked></Map>
      </MediaContent>
    </Media>
    <Content style="height: 56px /* computed */;">
      <div style="display: flex;">
        <TextField
          bind:value
          {invalid}
          label="plus code"
          style="width: 100%;"
        >
          <Icon class="material-icons" slot="leadingIcon">place</Icon>
        </TextField>
        <Wrapper>
          <IconButton
            class="material-icons"
            disabled={!!$finishTime && $activeCamp !== index}
            on:click={() => {
              $activeCamp = index
              $finishTime = Date.now() + $campingTime
            }}
            style="margin: auto;"
          >launch</IconButton>
          <Tooltip>Start camp</Tooltip>
        </Wrapper>
      </div>
    </Content>
  {/if}
</Card>

<style>
  .pluscode-cover {
    background-color: #fff;
    border-radius: 20px;
    bottom: 0;
    font-family: Bevan;
    margin: .5em;
    padding: .5em;
    position: absolute;
  }
</style>