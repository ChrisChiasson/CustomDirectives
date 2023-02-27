const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutside__ = event => {
      if (!(el === event.target && el.contains(event.target))) binding.value?.(event)
    }
    document.body.addEventListener('click', el.__ClickOutside__)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__ClickOutside__)
  }
}

export default vClickOutside;