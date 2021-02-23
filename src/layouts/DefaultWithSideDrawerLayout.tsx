import React, { useState } from "react";
import { View, Text } from "react-native";

import LayoutProps from "../types/LayoutProps";
import styles from "../styles/layouts/DefaultWithSideDrawerLayoutStyles";

import DefaultLayout from "./DefaultLayout";

const DefaultWithSideDrawerLayout = (props: LayoutProps) => {
  return (
    <View style={container}>
      <DefaultLayout {...props} />
    </View>
  );
};

const { container } = styles;

export default DefaultWithSideDrawerLayout;
