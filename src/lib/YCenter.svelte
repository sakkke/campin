<script>
  export let style
</script>

<div {style}>
  <slot></slot>
</div>

<style>
  div {
    align-items: center;
    display: flex;
  }
</style>