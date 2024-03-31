// const api = 'AIzaSyCOi49C-Bnb6As-kKvbDjKAh949kNbxCcU';
// const cx = 'a1a0ca40a4e344cd1';
// const query ='anime';
// const url = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${query}`;

// const search = async () => {
//     let get = await fetch(url);
//     let data = await get.text();
//     let json = JSON.parse(data);
//     console.log(json);
// }


const searchInput = document.getElementById('search');
const search = searchInput.value;

