import React from "react";
import { useParams } from "react-router-dom";

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topc ID: {topicId}</h3>;
}

export default Topic;
