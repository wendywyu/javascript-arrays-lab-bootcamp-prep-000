const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  array.shift(element)
  return array.shift
}
