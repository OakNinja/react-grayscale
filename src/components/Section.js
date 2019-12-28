import React from 'react';


function Section(props) {
  return (
    <section id={'#' + props.name} name={props.name} className={props.name +'-section text-center'}>
      {props.html}
    </section>
    );
  }

export default Section;