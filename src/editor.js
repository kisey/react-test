import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';


(function () {
	// create div to avoid needing a HtmlWebpackPlugin template
	const div = document.createElement('div');
	div.id = 'editor';
	div.style = 'width:800px; height:600px; border:1px solid #ccc;';

	document.body.appendChild(div);
})();

const editor = monaco.editor.create(document.getElementById('editor'), {
	value: `const foo = () => 0;`,
	language: 'javascript',
	theme: 'vs-dark'
});

setTimeout(() => {
    var line = editor.getPosition();
    var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
    var id = { major: 1, minor: 1 };             
    var text = "FOO";
    var op = {identifier: id, range: range, text: text, forceMoveMarkers: true};
    editor.executeEdits("my-source", [op]);
}, 1000);
