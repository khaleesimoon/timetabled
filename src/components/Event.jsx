import React from "react";

const Event = (props) => {
  return (
    <td className={'Event ' + props.color}>
        <h5>{props.event}</h5>
        <div>{props.location}</div> {/* used div instead of h6 so my <br/> would work */}
    </td>
  )
}
export default Event
