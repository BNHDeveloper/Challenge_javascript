let file = document.querySelector("input"),
    download = document.querySelector('button');

download.addEventListener('click', e => {
    e.preventDefault(); // preventing from submitting
    fetchFile(file.value);
})

function fetchFile(url) {
    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        // passing tempUrl as href value of <a> tag
        aTag.href = tempUrl;
        // passing FileName as downloder value of <a> tag
        aTag.download = url.replace(/^,*[\\\/]/,'');
        // adding <a> tag inside body
        document.body.appendChild(aTag);
        aTag.click();
        // clicking tag so the file will be download
        aTag.remove();
        // removing tag to stop download it more 
        //han one time hadi bach kima dir reload 
        //lal la page maya93adch y3awad ch7al man 5atra
    });
}



