const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(array, element) {
  array.unshift(element)
  return array
}

function destructivelyRemoveLastKitten(array, element) {
  array.slice(element)
  return array
}
