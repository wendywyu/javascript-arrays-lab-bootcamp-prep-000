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
  kittens.push(name);
  return kittens
}

function prependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function removeLastKitten() {
  kittens.pop()
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens.slice(1)
}
