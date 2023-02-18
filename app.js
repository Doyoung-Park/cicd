const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res)=>{
    res.json({
        hello: '두 번째 cicd 입니다.'
    })
});
app.get('/test', (req, res)=>{
    res.json({
        test: 'test 대박인데요?ㅋㅋ'
    })
});
app.get('/third', (req, res)=>{
    res.json({
        test: '세 번째 cicd 입니다!'
    })
});
app.listen(port, () => {
    console.log(port, '번 포트에서 대기 중');
});

