import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

import {
  AccumulationChartComponent,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationSeriesDirective,
  Legend,
  PieSeries,
  Inject,
  AccumulationSeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
const Pie = ({ id, data, legendVisibilty, height }) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisibilty, background: "white" }}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffSet="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
