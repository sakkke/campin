<script>
  import MapCard from '../lib/MapCard.svelte'
  import YCenter from '../lib/YCenter.svelte'
  import { pluscodes } from '../stores'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
</script>

<YCenter style="height: 100%;">
  <LayoutGrid style="background-color: rgba(255, 255, 255, 20%); border-radius: 20px; margin: 20px; width: 100%;">
    {#each [...$pluscodes].reverse() as pluscode, index}
      <Cell span={6}>
        <MapCard {index} {pluscode}></MapCard>
      </Cell>
    {/each}
  </LayoutGrid>
</YCenter>

<style></style>