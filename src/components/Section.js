import React from 'react';


function Section(props) {
  return (
    <section id={'#' + props.name} name={props.name} className={props.name +'-section ' + props.classList}>
      {props.html}
    </section>
    );
  }

export default Section;