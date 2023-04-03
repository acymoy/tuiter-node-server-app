const HelloController = (application) => {
    application.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
    application.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    });
}

export default HelloController;