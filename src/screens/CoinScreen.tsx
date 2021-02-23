import React from "react";

import { CoinScreenProps } from "../types/ScreenProps";

import DefaultLayout from "../layouts/DefaultLayout";
import CoinContainer from "../components/coin/CoinContainer";

const CoinScreen = (props: CoinScreenProps) => {
  return (
    <DefaultLayout
      icon="angle-left"
      component={CoinContainer}
      onPress={() => props.navigation.goBack()}
      {...props}
    />
  );
};

export default CoinScreen;
