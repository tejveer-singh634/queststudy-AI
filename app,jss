
function solveQuestion() {

    const question = document
        .getElementById("question")
        .value.trim();

    const answerBox = document.getElementById("answer");

    if (question === "") {
        answerBox.innerHTML = "Please enter a question first!";
        return;
    }

    const q = question.toLowerCase();

    let answer = "";

    if (q.includes("binary search")) {

        answer = `
        <h3>Binary Search</h3>
        <p>Binary Search is a searching algorithm
        used to find an element in a sorted array.</p>
        <p><b>Working:</b></p>
        <ol>
            <li>Find the middle element.</li>
            <li>Compare it with the target.</li>
            <li>If target is smaller, search left half.</li>
            <li>If target is larger, search right half.</li>
        </ol>
        <p><b>Time Complexity:</b> O(log n)</p>
        `;

    } else if (q.includes("stack")) {

        answer = `
        <h3>Stack Data Structure</h3>
        <p>Stack is a linear data structure
        that follows LIFO (Last In First Out).</p>
        <p>Example: A stack of plates.</p>
        <p><b>Operations:</b> Push, Pop, Peek.</p>
        `;

    } else if (q.includes("tree")) {

        answer = `
        <h3>Tree Data Structure</h3>
        <p>A tree is a non-linear data structure
        made up of nodes and edges.</p>
        <p><b>Important terms:</b>
        Root, Parent, Child, Leaf and Subtree.</p>
        `;

    } else {

        answer = `
        <h3>Question Received!</h3>
        <p>Your question is:
        ${escapeHTML(question)}</p>
        <p>This is a demo AI solver.
        Detailed AI answers will be added in the next versions.</p>
        `;
    }

    answerBox.innerHTML = answer;
}

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[char];
    });
}
