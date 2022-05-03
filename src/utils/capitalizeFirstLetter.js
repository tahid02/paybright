export function capitalizeFirstLetter(sentence) {
  const words = sentence.split(' ');

  const capitalized = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
  return capitalized;
}
