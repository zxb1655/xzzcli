const wait = (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

export default {
  wait
}