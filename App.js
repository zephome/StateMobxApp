import React from 'react';
import CounterContainer from './app/containers/CounterContainer';
// import {configure} from 'mobx';

// configure({
//   enforceActions: true,
// });

const App = () => {
  // return (
  //   <Provider counter={counter}>
  //     <CounterContainer />
  //   </Provider>
  // );
  return <CounterContainer />;
};

export default App;
