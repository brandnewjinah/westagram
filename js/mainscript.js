const displayCmt = document.querySelector('.displayCmt');
const cmtInput = document.querySelector('.cmtInput');
const cmtBtn = document.querySelector('.cmtBtn');


cmtInput.addEventListener('input', function(e){
    let comment = cmtInput.value.trim();

    if (comment.length > 0) {
        //activate button
        cmtBtn.classList.add('cmtBtn_active');
        cmtBtn.disabled = false;
    } else {
        //disable button
        cmtBtn.classList.remove('cmtBtn_active');
        cmtBtn.disabled = true;
    }
})

//clear form once submitted
//need to test if really submitted
cmtBtn.addEventListener('click', function(e){
    addComment();
    
    cmtBtn.classList.remove('cmtBtn_active');
    cmtBtn.disabled = true;
    cmtInput.value = '';
})

function addComment() {
    const cmtUl = document.querySelector('.cmtLists');
    const userName = document.createElement('span');
    let userCmt = document.createElement('span');
    let comment = cmtInput.value.trim();

    const div = document.createElement('div');
    const li = document.createElement('li');
    
    userName.setAttribute('class', 'username');
    userCmt.setAttribute('class', 'cmt nameblock');

    userName.innerText = 'username';
    userCmt.innerText = comment;

    div.appendChild(userName);
    div.appendChild(userCmt);
    li.appendChild(div);
    cmtUl.appendChild(li);
}

//search section

/*
const users = [
    {id: 'brandnewjinah'}, 
    {id: 'finallywknd'},
    {id: 'patrickchoimd'},
    {id: 'janekh'},
    {id: 'euneuney'},
]

const searchInput = document.querySelector('.searchinput');  //grab input box
const suggestionsWrapper = document.querySelector('.suggestions');  

searchInput.addEventListener('input', function(e){
    let searchWord = searchInput.value;
    searchWord = searchWord.toLowerCase();
    suggestionsWrapper.innerHTML = '';
    const suggestions = users.filter( (user) => {
            return user.id.includes(searchWord);
    });
    suggestions.forEach((suggested) => {
        const div = document.createElement('div');
        div.innerHTML = suggested.id;
        suggestionsWrapper.appendChild(div); 
    });
    if (searchWord === '') {
        suggestionsWrapper.innerHTML = '';
    }
});
*/