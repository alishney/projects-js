document.getElementById("upper-case").addEventListener("click",
    function() {
        document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click",
    function() {
        document.getElementById("text").value = document.getElementById("text").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click",
    function() {
        let text = document.getElementById("text").value.toLowerCase().split(" ");
        for(let i = 0; i < text.length; i++) {
            text[i] = text[i][0].toUpperCase() + text[i].slice(1);
        }
        document.getElementById("text").value = text.join(' ');
});

document.getElementById("sentence-case").addEventListener("click",
    function() {
        let text = document.getElementById("text").value.toLowerCase().split(". ");
        for(let i = 0; i < text.length; i++) {
            text[i] = text[i][0].toUpperCase() + text[i].slice(1);
        }
        document.getElementById("text").value = text.join('. ');
});




document.getElementById("save-text-file").addEventListener("click", function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById("text").value));
    element.setAttribute('download', "text.txt");
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});

