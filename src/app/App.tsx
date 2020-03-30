import React from 'react';
import List from './list/list';
import Form from './form/form';
import Post from './post';

const App = () => (
    <div>
        <h2>Articles</h2>
        <Form />
        <List />
        <Post />
    </div>
);

export default App;
