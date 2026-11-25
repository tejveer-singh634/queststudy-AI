
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

<p><b>Definition:</b> Binary Search is a searching
algorithm used to find an element in a sorted array.</p>

<h4>Working Steps:</h4>
<ol>
<li>Find the middle element.</li>
<li>Compare the middle element with the target.</li>
<li>If both are equal, return its index.</li>
<li>If target is smaller, search the left half.</li>
<li>If target is larger, search the right half.</li>
<li>Repeat until the element is found or the search range becomes empty.</li>
</ol>

<h4>Example:</h4>
<p>Array: [10, 20, 30, 40, 50]</p>
<p>Target: 40</p>
<ol>
<li>Middle element = 30</li>
<li>40 is greater than 30, so search right half.</li>
<li>Middle element = 40</li>
<li>Element found at index 3 (position 4).</li>
</ol>

<h4>Algorithm:</h4>
<pre>
low = 0
high = n - 1

while low <= high:
    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        low = mid + 1
    else:
        high = mid - 1

return -1
</pre>

<p><b>Best Case:</b> O(1)</p>
<p><b>Average Case:</b> O(log n)</p>
<p><b>Worst Case:</b> O(log n)</p>
<p><b>Space Complexity:</b> O(1) for iterative implementation.</p>

<p><b>Conclusion:</b> Binary Search is efficient for
searching elements in a sorted array.</p>
`;

