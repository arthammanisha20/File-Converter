function convertFile(){
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0){
        alert('please select a file.');
        return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e){
        const fileContent = e.target.result;
        const convertedText = fileContent.toUpperCase();

        const convertedTextArea = document.getElementById('convertedText');
        convertedTextArea.value = convertedText;
    };
    reader.readAsText(file);
}