const heading = React.createElement(
    'div',
    { id: 'parent' },
    [
      React.createElement(
        'div',
        { id: 'child1' },
        [
          React.createElement('h1', {}, 'This is from child 1'),
          React.createElement('h2', {}, 'This is from child 1'),
        ]
      ),
      React.createElement(
        'div',
        { id: 'child2' },
        [
          React.createElement('h1', {}, 'This is from child 2'),
          React.createElement('h2', {}, 'This is from child 2'),
        ]
      ),
    ]
  );
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

