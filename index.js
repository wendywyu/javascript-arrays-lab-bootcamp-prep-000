const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  array.push(element)
  return array
}

function destructivelyPrependKitten(array, element) {
  array.unshift(element)
  return array
}

function destructivelyRemoveLastKitten(array, element) {
  array.slice(element)
  return array
}