const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kittens2 = (name)
  kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
