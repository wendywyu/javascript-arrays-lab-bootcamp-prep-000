const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  const moreKittens = [...kittens, array.push(element)]
  return array
}

function destructivelyPrependKitten(array, element) {
  array.unshift(element)
  return array
}
