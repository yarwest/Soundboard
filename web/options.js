var authorOrder = -1;

function authorCompare(a, b) {
    var returnVal = 0
    if(a.author < b.author) {
        returnVal = -1;
    } else if(a.author > b.author) {
        returnVal = 1;
    }
    return returnVal * authorOrder;
}

function sortByAuthor() {
    authorOrder = authorOrder * -1;
    files.sort(authorCompare);
    draw();
}
