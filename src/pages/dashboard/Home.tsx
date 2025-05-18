import { ApexOptions } from "apexcharts"
import Charts from "../../components/dashboard/Chart"
import Daily from "../../components/dashboard/Daily"
import { mockDailyData } from "../../mock_data"

enum ChartTypes {
  LINE = "line",
  AREA = "area",
  BAR = 'bar',
  PIE = 'pie',
  DONUT = 'donut'
}

enum StrokeCurveTypes {
  SMOOTH = "smooth",
  STRAIGHT = "straight",
  STEPLINE = "stepline",
  LINESTEP = "linestep",
  MONOTONE_CUBIC = "monotoneCubic"
}


const Home = () => {

  const lineCategories = mockDailyData.dailySales
  const lineHours = lineCategories.map((cat) => cat.hour)
  const lineAmounts = lineCategories.map((cat) => cat.amount)

  const barAmounts:number[] = mockDailyData.paymentMethods.map((method) => method.amount)

  const lineChartConfig = {
    series: [
      {
        name: "Saatlik Satış",
        data: lineAmounts,
      },
    ],
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    stroke: {
      lineCap: "round",
      curve: StrokeCurveTypes.SMOOTH,
    },
    markers: {
      size: 2,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
      categories: lineHours,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      type: 'gradient',
      opacity: 0.8,
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#FF5733"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [
          { offset: 0, color: "#00E396", opacity: 1 },
          { offset: 50, color: "#FEB019", opacity: 0.8 },
          { offset: 100, color: "#FF4560", opacity: 0.6 },
        ]
      },
    },
    tooltip: {
      theme: "dark",
    }
  } as ApexOptions;


  const barChartConfig = {
    series: [
      {
        name: "Ödeme",
        data: barAmounts,
      },
    ],
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#1e88e5"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Kredi Kartı",
        "Nakit"
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  } as ApexOptions;


  const pieChartConfig = {
    series: [87, 13],
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#1e88e5", "#d81b60"],
    labels: ["Dolu", "Boş"],
    legend: {
      show: true,
    },
  } as ApexOptions;

  return (
    <div className="w-full flex flex-col">
      <Daily stats={mockDailyData.stats} />
      <Charts header="Günlük Satış Miktarları" height={300} type={ChartTypes.LINE} content="" chartConfig={lineChartConfig} />
      <div className="flex w-full gap-4 mt-6">
        <div className="w-full h-auto">
          <Charts chartConfig={barChartConfig} header="Bugün Yapılan Ödemeler" height={280} type={ChartTypes.BAR} />
        </div>
        <div className="w-full ">
          <Charts chartConfig={pieChartConfig} header="Masa Yoğunluğu" height={280} type={ChartTypes.DONUT} />
        </div>
      </div>
    </div>
  )
}

export default Home

