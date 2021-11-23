<script>
  import { license, version } from '../../package.json'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
</script>

<LayoutGrid style="background-color: rgba(255, 255, 255, 20%); border-radius: 20px; margin: 20px;">
  <Cell span={6}>
    <div class="cell-inner cell-version">
      <div class="cell-content">
        <h2>Version</h2>
        <p>{version}</p>
      </div>
    </div>
  </Cell>
  <Cell span={6}>
    <div class="cell-license cell-inner">
      <div class="cell-content">
        <h2>License</h2>
        <p>{license}</p>
      </div>
    </div>
  </Cell>
</LayoutGrid>

<style>
  .cell-content {
    padding: 20px;
  }

  .cell-inner {
    position: relative;
  }

  .cell-inner::before {
    border-radius: 20px;
    content: '';
    height: 100%;
    opacity: 50%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .cell-license::before {
    background-image: linear-gradient(to right bottom, #2fb, #bf2);
  }

  .cell-license, .cell-version {
    color: #fff;
    text-shadow: 0 0 2px #000;
  }

  .cell-version::before {
    background-image: linear-gradient(to right bottom, #b2f, #f2b);
  }
</style>