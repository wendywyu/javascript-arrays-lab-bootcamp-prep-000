const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  array.push(element)
  return array
}

function destructivelyPrependKitten(array, element) {
  array.unshift(element)
  return array
}
