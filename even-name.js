const friends = ['Masum', 'Farid', 'Biplob', 'Rezwan', 'Bin Abu Bakkar', 'Faisal', 'Das'];

let newFriends = [];
const evenLength = friends => {
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            newFriends.push(friend);
        }
        else {
            continue;
        };
    };
    return newFriends;
};

const result = evenLength(friends);

console.log(result);

document.getElementById('btn-submit').addEventListener('click', function(){
    const elementValue = document.getElementById('element');
    elementValue.innerText = result;
});