const sourceTextarea = document.getElementById("source-textarea");


document.getElementById("upper-case-action-button").addEventListener("click",
    function() {
        sourceTextarea.value = sourceTextarea.value.toUpperCase();
});

document.getElementById("lower-case-action-button").addEventListener("click",
    function() {
        sourceTextarea.value = sourceTextarea.value.toLowerCase();
});

document.getElementById("proper-case-action-button").addEventListener("click",
    function() {
        let wordsArray = sourceTextarea.value.toLowerCase().split(" ");
        for(let i = 0; i < wordsArray.length; i++) {
            wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
        }
        sourceTextarea.value = wordsArray.join(' ');
});

document.getElementById("sentence-case-action-button").addEventListener("click",
    function() {
        let wordsArray = sourceTextarea.value.toLowerCase().split(". ");
        for(let i = 0; i < wordsArray.length; i++) {
            wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
        }
        sourceTextarea.value = wordsArray.join('. ');
});

document.getElementById("save-text-file-action-button").addEventListener("click", function download() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sourceTextarea.value));
    element.setAttribute('download', "text.txt");
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});

