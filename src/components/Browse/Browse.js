import React from 'react';

function Problem(props) {
  return (
    <ul>
      <li>{props.title}</li>
      <li>{props.desc}</li>
      <li>{props.sample}</li>
      <li>{props.test_cases.input}</li>
      <li>{props.test_cases.output}</li>
    </ul>
  );
}

export default function Browse(props) {
  function renderProblem({ title, desc, sample, test_cases }) {
    return (<Problem
      title={title}
      desc={desc}
      sample={sample}
      test_cases={test_cases}
    />);
  }
  return (
    <div className="browse-wrapper">
      <h2>Browse Problems</h2>
      <div>
        {renderProblem({
          title: "Quick Sort", desc: "Sort n elements in O(n logn) time",
          sample: "sample code here", test_cases: { input: "[1, 3, 5, 4, 2]", output: "[1, 2, 3, 4, 5]" }
        })}
        {renderProblem({
          title: "Merge Sort", desc: "Sort n elements in O(n logn) time",
          sample: "sample code here", test_cases: { input: "[1, 3, 5, 4, 2]", output: "[1, 2, 3, 4, 5]" }
        })}
      </div>
    </div>
  );
}