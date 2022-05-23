import { useContext, useEffect, useRef } from "react";
import * as ChartJS from "chart.js";

ChartJS.Chart.register(...ChartJS.registerables);

import * as Context from "@/context";
import type { IBandData } from "@/global/myGlobalTypes";

function BandChart(): React.ReactElement {
  const { bandData } = useContext(Context.BandContext);

  const chartRef = useRef<ChartJS.Chart | null>(null);

  function formatData(data: IBandData[]): ChartJS.ChartData {
    return {
      labels: data?.map((band) => band.name) || ["Not Band"],
      datasets: [
        {
          label: "Bands",
          data: data?.map((band) => band.votes) || [0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.3)",
            "rgba(54, 162, 235, 0.3)",
            "rgba(255, 206, 86, 0.3)",
            "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",
            "rgba(255, 159, 64, 0.3)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  function canvasCallback(canvas: HTMLCanvasElement | null) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new ChartJS.Chart(ctx, {
      type: "bar",
      data: formatData(bandData.listBands),
      options: {
        animation: false,
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            stacked: true,
            ticks: { color: "rgb(148, 163, 184)" },
            grid: { color: "rgb(55, 65, 81)" },
          },
          y: {
            beginAtZero: true,
            stacked: true,
            ticks: { color: "rgb(203, 213, 225)" },
            grid: { color: "rgb(55, 65, 81)" },
          },
        },
        borderColor: "#fff",
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(107, 114, 128)",
              font: { size: 18 },
            },
          },
        },
      },
    });
  }
  // effect to update the chart when props are updated
  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      chartRef.current.data = formatData(bandData.listBands);
      chartRef.current.update();
    }
  }, [bandData.listBands]);

  return (
    <div className="mx-auto max-w-4xl">
      <canvas ref={canvasCallback}></canvas>
    </div>
  );
}

export default BandChart;
