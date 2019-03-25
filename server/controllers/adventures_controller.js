let id = 0
let adventures = [
  {
    id: id++,
    location: 'Brighton, UT',
    activity: 'Snowboarding',
    image: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/50739460_10218404922938372_3203143294611619840_n.jpg?_nc_cat=108&_nc_ht=scontent-lax3-2.xx&oh=2bf1c1cca8c6e1e57b7478a72cc7245d&oe=5D4F476D',
    complete: true
  },
  {
    id: id++,
    location: 'La Jolla, California',
    activity: 'Surfing',
    image: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46828860_1774449079348159_8251257260861292544_n.jpg?_nc_cat=105&_nc_ht=scontent-lax3-2.xx&oh=63154af3ed52ba37687c051a4178cb92&oe=5D14B9BD',
    complete: true
  },
  {
    id: id++,
    location: 'Huntington, Utah',
    activity: 'Bow Hunting',
    image: 'https://cdn0.wideopenspaces.com/wp-content/uploads/2016/09/bow-final-630x339.jpg',
    complete: false
  },
  {
    id: id++,
    location: 'Soldotna, Alaska',
    activity: 'Fly Fishing',
    image: 'http://www.shinervineyards.com/wp-content/uploads/2018/10/wills-fly.jpg',
    complete: false
  },
  
]

module.exports = {

  createAdventure: (req, res) => {
    let {location, activity, image, complete} = req.body

    let adventure = {
      id: id++,
      location,
      activity,
      image,
      complete
    }
    adventures.push(adventure)
    res.send(adventures)
  },

  read: (req, res) => {
    res.send(adventures)
  },

  updateAdventure: (req, res) => {
    let {location, activity, image, complete} = req.body
    let {id} = req.params

    let updatedAdventure = {
      id,
      location,
      activity,
      image,
      complete
    }
    let index = null
    adventures.forEach((adventure, i) => {
      if(+adventure.id === +id){
        index = i
      }
    })

    adventures.splice(index, 1, updatedAdventure)
    res.send(adventures)
  },

  deleteAdventure: (req, res) => {
    let index = null

    adventures.forEach((adventure, i) => {
      if(+adventure.id === +req.params.id){
        index = i
      }
    })
    adventures.splice(index, 1)
    res.send(adventures)
  },

  complete: (req, res) => {
    let {location, activity, image} = req.body
    let {id} = req.params

    let completeAdventure = {
      id,
      location,
      activity,
      image,
      complete: true
    }
    let index = null
    adventures.forEach((adventure, i) => {
      if(+adventure.id === +id){
        index = i
      }
    })

    adventures.splice(index, 1, completeAdventure)
    res.send(adventures)
  },

  addImages: (req, res) => {
    let {image} = req.body
    let {id} = req.params

    let index = null
    adventures.forEach((adventure, i) => {
      if(+adventure.id === +id){
        index = i
      }
    })
    adventure[index].image.push(image)
  }
}