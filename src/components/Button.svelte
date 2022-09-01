<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>

<button {type} {disabled} class="{style} small-btn">
  <slot></slot>
</button>


<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #484852;
  }

  .secondary {
    background: var(--accent-color);
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }

  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }

  @media (max-width: 650px) {
    .small-btn {
      max-width: 40px;
      max-height: 30px;
      font-size: .5rem;
    }
  }

</style>

