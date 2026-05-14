"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";

export function ChartByDayMix({
  chartTitle = "TRANSIENTVSGROUP OTB BYDAY",
  horizontalAxis,
  stackedBarChartSlot,
  text1 = "capactity",
  text2 = "0102030405060708 091011121314151617 1819202122232425 2627282930",
}) {
  return (
    <Block
      className={_utils.cx(_styles, "bar-mix-card", "add-shadow")}
      tag={"div"}
    >
      <Block
        className={_utils.cx(_styles, "bar-mix-card_plot-area")}
        tag={"div"}
      >
        <Block className={_utils.cx(_styles, "chart-container")} tag={"div"}>
          {stackedBarChartSlot}
          {horizontalAxis}
        </Block>
      </Block>
      <Block className={_utils.cx(_styles, "flex_vertical")} tag={"div"}>
        <Block
          className={_utils.cx(_styles, "kpi-card_label", "is-secondary")}
          tag={"div"}
        >
          {chartTitle}
        </Block>
      </Block>
    </Block>
  );
}
