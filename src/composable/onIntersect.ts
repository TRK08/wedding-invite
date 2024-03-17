import { unref } from 'vue'

export const onIntersect = (
  elementToWatch: HTMLElement,
  callback: (target: Element) => void,
  config: Record<string, any> = {}
) => {
  if (!elementToWatch) return

  const { outCallback = () => {}, once = true, options = { threshold: 1.0, }, } = config
  // Initiate the observer
  const observer = new IntersectionObserver(([entry]) => {
    // If the element to watch is intersecting within the threshold
    if (entry && entry.isIntersecting) {
      // Run the callback
      callback(entry.target)

      // If the callback should only run once, unobserve the element
      if (once) {
        observer.unobserve(entry.target)
      }
    }

    // If the element is not intersecting, run the (optional) unintersecting callback
    else {
      outCallback(entry.target)
    }
  }, options)

  // Observe the element
  observer.observe(unref(elementToWatch))

  // Returns the observer so it can be further used in the component
  return observer
}
