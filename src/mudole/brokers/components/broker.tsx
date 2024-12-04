import React from "react";
import { useBrokerPost } from "../hooks";

const Broker = () => {
  const { mutate } = useBrokerPost();

  return <div>BrokerCom</div>;
};

export default Broker;
