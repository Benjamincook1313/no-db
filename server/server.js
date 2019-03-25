const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adventCtrl = require('./controllers/adventures_controller')

app.use(bodyParser.json())
// Add.js
app.post('/api/adventure', adventCtrl.createAdventure)

// NextAdventure.js
app.get('/api/adventures', adventCtrl.read)
app.put('/api/adventure/:id', adventCtrl.updateAdventure)
app.delete('/api/adventure/:id', adventCtrl.deleteAdventure)
app.put('/api/adventure/complete/:id', adventCtrl.complete)
// OldAdventures
app.get('/api/adventure/complete', adventCtrl.read)
app.put('api/adventure/addimages/:id', adventCtrl.addImages)





const port = 3131
app.listen(port, () => console.log(`Listening on ${port}`))