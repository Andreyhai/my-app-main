// import { Dropdown } from 'bootstrap';
import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import x1 from '../../sources/image.png'
import x2 from '../../sources/image copy.png'

function SplitBasicExample(props) {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic" style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
    {
      props.src ? <img src={x1} alt={x1}/> : <img src={x2} width={50} alt={x2}/>
    }
    {
      props.src ? <div>EN</div> : <div>RU</div>
    }
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" style={{
        display: "flex",
      alignItems: "center",
      gap: "10px"
      }}
      onClick={props.ChangeSrc}
      >
      <img src={x1} />
      <div>EN</div>
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2" style={{
        display: "flex",
      alignItems: "center",
      gap: "10px"
      }}
      onClick={props.ChangeSrc}
      >
      <img 
        src={x2} 
        width={50}
      />
      <div>RU</div>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

const LanguageButton = ({src, ChangeSrc}) => {
  return (
    <section style={{
      padding: "5px 10px",
      border: "1px solid black",
      borderRadius: "30px",
      width: "fit-content"
    }}>
    <SplitBasicExample src={src} ChangeSrc={ChangeSrc}/>
    </section>
  );
};

export default LanguageButton;