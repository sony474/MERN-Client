import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root =ReactDom.createroot(document.getElementById('root'));
root.render(
  <div>
    <h1>Client</h1>
  </div>
);

//virtual Root( V DOM)
/*VirtualRoot.render(
      <Router>
      <div>
          <Header/>

          <h1 className='text-red-900'>HEllo World</h1>
          <Example/>
      </div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </Router>
)*/