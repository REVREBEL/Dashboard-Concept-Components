"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import { MetricType } from "./MetricType";

export function PerformanceCardToolTip({
  adrAdrVarBudgetRuntimeProps = {},
  adrAdrVarBudgetSlot = "",
  adrTotalAdrotbRuntimeProps = {},
  adrTotalAdrotbSlot = "",
  adrTrnTotalAdrotbRuntimeProps = {},
  adrTrnTotalAdrotbSlot = "",
  revenueRevenueVarBudgetSlot = {},
  revenueRevenueVarBudgetSlot2 = "",
  revenueTrnRevenueVarBudgetRuntimeProps = "",
  revenueTrnRevenueVarBudgetSlot = {},
  revenueTrnTotalRevenueOtbMetricSlot = "",
  revenueTrnTotalRevenueOtbRuntimeProps = {},
  roomsRoomsVarBudgetRuntimeProps = {},
  roomsRoomsVarBudgetSlot = "",
  roomsTotalRoomsOtbRuntimeProps = {},
  roomsTotalRoomsOtbSlot = "",
  roomsTrnTotalRoomsOtbSlot = "",
  totalRevenueOtbRuntimeProps = {},
  totalRevenueOtbSlot = "",
  trnTotalRoomsOtbRuntimeProps = {},
}) {
  return (
    <Block
      className={_utils.cx(_styles, "performance-card_tool-tip-wrapper")}
      tag={"div"}
    >
      <Block tag={"div"}>
        <Heading
          className={_utils.cx(_styles, "tool-tip_headline", "is-underline")}
          tag={"h1"}
        >
          {"Budget Reach "}
        </Heading>
        <Block
          className={_utils.cx(
            _styles,
            "tool-tip_wrapper",
            "padding-bottom-sm"
          )}
          tag={"div"}
        >
          <Block
            className={_utils.cx(
              _styles,
              "group-wrapper",
              "text-color-primary"
            )}
            tag={"div"}
          >
            <MetricType layout={"Horizontal 1row"} metricType={"Occupancy"} />
            <MetricType layout={"Horizontal 1row"} metricType={"ADR"} />
            <MetricType
              layout={"Horizontal 1row"}
              metricType={"RevPar"}
              varianceType={"var"}
            />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
