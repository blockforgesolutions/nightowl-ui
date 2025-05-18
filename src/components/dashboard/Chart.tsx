import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { ApexOptions } from 'apexcharts';
import React from 'react'
import Chart from "react-apexcharts";

// interface ColorStops {
//     offset: number,
//     color: string,
//     opacity: number
// }

// enum ChartTypes {
//     LINE = "line",
//     AREA = "area",
//     BAR = 'bar'
// }


// interface ChartConfig {
//     type: ChartTypes,
//     height: number; // Grafiğin yüksekliği
//     series: Array<{
//         name: string; // Veri serisinin adı
//         data: number[]; // Grafik için veri
//     }>;
//     options: {
//         chart: {
//             toolbar: {
//                 show: boolean; // Araç çubuğunun gösterimi
//             };
//         };
//         title: {
//             show: string; // Başlık gösterimi (Boşsa gösterilmez)
//         };
//         dataLabels: {
//             enabled: boolean; // Veri etiketlerinin gösterimi
//         };
//         colors: string[]; // Renkler
//         stroke: {
//             lineCap: string; // Çizgi uç stili ("round", "butt", "square")
//             curve: string; // Çizgi eğrisi ("smooth", "straight", "stepline")
//         };
//         markers: {
//             size: number; // İşaretleyici boyutu
//         };
//         xaxis: {
//             axisTicks: {
//                 show: boolean; // X eksenindeki çizgi işaretlerinin gösterimi
//             };
//             axisBorder: {
//                 show: boolean; // X eksenindeki sınır çizgilerinin gösterimi
//             };
//             labels: {
//                 style: {
//                     colors: string; // Etiket renkleri
//                     fontSize: string; // Yazı tipi boyutu
//                     fontFamily: string; // Yazı tipi ailesi
//                     fontWeight: number; // Yazı tipi kalınlığı
//                 };
//             };
//             categories: string[]; // X ekseni kategorileri
//         };
//         yaxis: {
//             labels: {
//                 style: {
//                     colors: string; // Etiket renkleri
//                     fontSize: string; // Yazı tipi boyutu
//                     fontFamily: string; // Yazı tipi ailesi
//                     fontWeight: number; // Yazı tipi kalınlığı
//                 };
//             };
//         };
//         grid: {
//             show: boolean; // Izgara çizgilerinin gösterimi
//             borderColor: string; // Izgara sınır rengi
//             strokeDashArray: number; // Çizgi tipi (kesikli)
//             xaxis: {
//                 lines: {
//                     show: boolean; // X ekseni çizgilerinin gösterimi
//                 };
//             };
//             padding: {
//                 top: number; // Üstten boşluk
//                 right: number; // Sağdan boşluk
//             };
//         };
//         fill: {
//             type: string; // Dolgu türü ("gradient", "solid")
//             opacity: number; // Dolgu opaklığı
//             gradient: {
//                 shade: string; // Gölge türü
//                 type: string; // Gradient türü ("horizontal", "vertical", vb.)
//                 shadeIntensity: number; // Gölge yoğunluğu
//                 gradientToColors?: string[]; // Gradient bitiş renkleri
//                 inverseColors: boolean; // Renklerin ters çevrilip çevrilmeyeceği
//                 opacityFrom: number; // Gradient başlangıç opaklığı
//                 opacityTo: number; // Gradient bitiş opaklığı
//                 stops: number[]; // Gradient durak noktaları
//                 colorStops?: ColorStops[]; // Özel renk durakları
//             };
//         };
//         tooltip: {
//             theme: string; // Tooltip teması ("dark", "light", vb.)
//         };
//     };
// }


interface ChartsProps {
    header: string,
    content?: string,
    chartConfig: ApexOptions,
    type: string,
    height: number
}


const Charts: React.FC<ChartsProps> = ({ header, content, chartConfig, type, height }) => {

    // const initChartConfig = {
    //     options: chartConfig.options
    // };

    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div>
                    <Typography variant='small' className='font-inter font-semibold'>
                        {header}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        {content}
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 pb-0">
                <Chart
                    height={height}
                    series={chartConfig.series}
                    type={type as | "line"
                        | "area"
                        | "bar"
                        | "pie"
                        | "donut"
                        | "radialBar"
                        | "scatter"
                        | "bubble"
                        | "heatmap"
                        | "candlestick"
                        | "boxPlot"
                        | "radar"
                        | "polarArea"
                        | "rangeBar"
                        | "rangeArea"
                        | "treemap"}
                    options={chartConfig} />
            </CardBody>
        </Card>
    )
}

export default Charts