const Post = require('../models/post')

const posts = [
    new Post({
        title: "How to code", 
        body: "Heres how you code...Praesent odio magna, vestibulum ac odio non, sollicitudin congue arcu. Integer eu dapibus justo. Duis ut ligula eget erat mattis posuere sit amet non risus. Donec quis convallis quam, sit amet sodales est. Quisque metus quam, vestibulum eu pretium eu, eleifend congue odio. Phasellus feugiat placerat mollis. Donec laoreet nec massa ut sollicitudin. Quisque diam metus, lobortis vel urna id, ullamcorper varius turpis. Nam non nisi ac mauris suscipit commodo sed in orci.", 
    }), 
    new Post({
        title: "My Swiss adventures", 
        body: "It was the year 2020...Vivamus imperdiet luctus neque sed sagittis. Aenean viverra ipsum sed lectus tristique, et blandit sem viverra. Nam congue arcu a gravida cursus. Nam euismod fermentum sem eget consectetur. Aliquam in egestas neque, eget ultrices dolor. Nunc consectetur tempor volutpat. Nam eget congue tortor. Pellentesque tempus pulvinar quam. Nunc pellentesque, sem id ullamcorper cursus, nulla lorem consectetur justo, non tristique risus enim at mauris. Fusce pretium interdum ultrices. Quisque orci libero, molestie sed hendrerit vitae, malesuada sed ex. Cras a aliquet leo. In hac habitasse platea dictumst. Mauris feugiat, magna a pretium ullamcorper, lectus tortor dignissim mauris, at auctor lacus odio nec tortor.", 
    }),
    new Post({
        title: "Favorite Zurich restaurants", 
        body: "Zurich is not the place for cheap eats...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis nibh vel libero porttitor, at tristique mi tristique. In eros erat, hendrerit nec sem non, pulvinar convallis enim. Donec eleifend molestie maximus. Nulla facilisi. Cras pulvinar malesuada enim. Nunc odio dolor, vehicula ac felis id, hendrerit mattis nibh. Phasellus at dui commodo, placerat dolor vel, facilisis libero. Ut vestibulum orci ultricies condimentum facilisis. Integer quis sodales mi, sit amet semper velit. Sed porttitor nisi tellus, eget ultrices nunc finibus eget. Suspendisse eu elit efficitur, finibus erat placerat, dignissim neque. Donec mauris quam, scelerisque vitae porta mollis, tincidunt a libero. Vestibulum pellentesque mollis consectetur.",
    })
]

exports.posts = posts