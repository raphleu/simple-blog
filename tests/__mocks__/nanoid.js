let counter = 1

module.exports = {
    nanoid() {
        return counter++
    }
}