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
    var searchValue = document.getElementById("searchBar").value.trim().toLowerCase();
    reset();
    //TODO: find something to replace this workaround.
    document.getElementById("searchBar").value = searchValue;
    files = files.filter(function(file) {
        if(file.title.toLowerCase().startsWith(searchValue)) {
            return file;
        }
    });
    draw();
}

function reset() {
    files = tempFiles.slice(0);
    draw();
    document.getElementById("searchBar").value="";
}
