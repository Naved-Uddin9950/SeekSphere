const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {    
    const api = 'AIzaSyCOi49C-Bnb6As-kKvbDjKAh949kNbxCcU';
    const cx = 'a1a0ca40a4e344cd1';
    const query = await req.body.searchedQuery;
    const url = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${query}`;

    let get = await fetch(url);
    let data = await get.text();
    let json = JSON.parse(data);

    res.render('results', {'query' : query, 'data' : json});
});


module.exports = router;