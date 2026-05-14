"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";

export function RevenueMetric({
  text1 = "Revenue",
  text2 = "$0,000",
  text3 = "$0,000",
}) {
  return (
    <Block
      className={_utils.cx(
        _styles,
        "metric-wrapper",
        "is-horizontal",
        "is-gap-col_1rem"
      )}
      tag={"div"}
    >
      <Block
        className={_utils.cx(_styles, "metric-label", "is-align-top")}
        tag={"div"}
      >
        {text1}
      </Block>
      <Block className={_utils.cx(_styles, "metric-wrapper")} tag={"div"}>
        <Block
          className={_utils.cx(_styles, "metric-value", "is-current-0dp")}
          tag={"div"}
        >
          {text2}
        </Block>
        <Block
          className={_utils.cx(
            _styles,
            "metric-value",
            "is-current-0dp",
            "is-var"
          )}
          tag={"div"}
        >
          {text3}
        </Block>
      </Block>
    </Block>
  );
}
