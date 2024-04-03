// Get the "editor" and "preview" elements
const editor = document.getElementById('editor');
const btn = document.getElementById('btn');

window.onload = function () {
    // Add the event listener to the 'input' event for the 'editor' element
    document.getElementById('editor').addEventListener('input', function () {
        const editor = document.getElementById('editor');
        const preview = document.getElementById('preview');
        const transformedEditor = marked.parse(editor.value);
        preview.innerHTML = transformedEditor;
    });
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const transformedEditor = marked.parse(editor.value);
    preview.innerHTML = transformedEditor;
}
