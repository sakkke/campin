<script>
  export let style
</script>

<div {style}>
  <slot></slot>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>