import posts from './tuits.js'

let tuits = posts

const TuitController = (app) => {
    app.post('api/tuits', createTuit)
    app.get('/api/tuits', findTuits)
    app.put('/api/tuits/:tid', updateTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
}

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = (new Date()).getTime() + ''
    newTuit.likes = 0
    newTuit.liked = false
    newTuit.replies = 0
    newTuit.retuits = 0
    tuits.push(newTuit)
    res.json(newTuit)
}

const findTuits = (req, res) => {
    res.json(tuits)
}

const updateTuit = (req, res) => {
    const tuitId = req.params.tid 
    const updates = req.body
    tuits = tuits.map((tuit) => 
        tuit._id === tuitId ?
            {...tuit, ...updates} : tuit)
    res.sendStatus(200)
}

const deleteTuit = (req, res) => {
    const tuitId = req.params.tid 
    tuits.filter(tuit => tuit._id !== tuitId)
    res.sendStatus(200)
}


export default TuitController