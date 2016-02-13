export default {
  getRandomInt: (min = 0, max = 6) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
