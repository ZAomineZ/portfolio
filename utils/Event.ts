export function subscribe(eventName: string, listener: (evt: Event) => void) {
  document.addEventListener(eventName, listener)
}

export function unSubscribe(eventName: string, listener: (evt: Event) => void) {
  document.removeEventListener(eventName, listener)
}

export function publish(eventName: string, data?: keyof object) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
