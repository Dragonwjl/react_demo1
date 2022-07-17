import React from "react";
import { Rate } from "antd";

export default function Pin({ checked, onCheckedChange, ...restProps }){
    return (
        <Rate
          count={1}
          value={checked ? 1 : 0}
          onChange={(num) => onCheckedChange(Boolean(num))}
          {...restProps}
        />
      );
}