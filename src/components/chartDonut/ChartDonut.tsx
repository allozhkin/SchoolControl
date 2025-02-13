import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const totalValue = 500;
const dataValues: string[] = ['40', '30', '12', '20']; // Подставляем данные из API
const dataNumbArr: number[] = dataValues.map(Number);
const dataValSumm: number = dataNumbArr.reduce((acc, next) => acc + next, 0);
const remainder = totalValue - dataValSumm;
const dataNameArr: string[] = ["орви", "пневмания", "Энтеровирусная инекция", "По заявлению родителей", "присутствующие"];
dataNumbArr.push(remainder);

const data = {
  labels: dataNameArr,
  datasets: [
    {
      data: dataNumbArr,
      backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CDDAF3"],
      cutout: "75%",
      radius: "85%",
      
    },
  ],  
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        font: { size: 12 },
        color: "#333",
        
      },
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
      borderColor: "#fff",
    },
  },
};

const percentagePlugin = {
  id: "percentagePlugin",
  afterDraw(chart: any) {
    const { ctx, chartArea, data } = chart;

    chart.getDatasetMeta(0).data.forEach((arc: any, index: number) => {
      const value = data.datasets[0].data[index];
      if (!value) return;

      const percentage = ((value / totalValue) * 100).toFixed(1) + "%";
      const angle = (arc.startAngle + arc.endAngle) / 2;
      const radius = (arc.outerRadius + arc.innerRadius) / 2;

      const x = chartArea.left + arc.x + radius * Math.cos(angle);
      const y = chartArea.top + arc.y + radius * Math.sin(angle);

      ctx.fillStyle = "#000000";
      ctx.font = "bold 8px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(percentage, x, y);
    });

    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;

    ctx.fillStyle = "#333";
    ctx.font = "400 15px Manrope";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(totalValue.toString() + ' человек', centerX, centerY + 30);

    const percentage = ((dataValSumm / totalValue) * 100).toFixed(1) + "%";
    ctx.fillStyle = "#333";
    ctx.font = "700 40px Manrope";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(percentage, centerX, centerY);
  },
};

ChartJS.register(percentagePlugin);

const ChartDonut = () => <Doughnut data={data} options={options} />;

export default ChartDonut;
