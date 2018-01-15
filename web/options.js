var authorOrder = -1,
    tempFiles = files.slice(0);

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

function search() {
    reset();
    var searchValue = document.getElementById("searchBar").value.trim();
    files = files.filter(function(file) {
        if(file.title.startsWith(searchValue)) {
            return file;
        }
    });
    draw();
}

function reset() {
    files = tempFiles.slice(0);
    draw();
}
