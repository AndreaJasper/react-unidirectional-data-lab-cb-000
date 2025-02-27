  
'use strict'

import React from 'react';

const Toolbar = ({onAdd,onRemove}) => (
  <nav>
    <button onClick={onAdd}>+ Add note</button>
    <button onClick={onRemove}>Delete note</button>
  </nav>
);

export default Toolbar;