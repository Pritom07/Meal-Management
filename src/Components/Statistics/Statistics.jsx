import { useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Statistics = () => {
    const dataObj = useLoaderData();
    const data = dataObj.countries;
    const formatCountryName = (name) => name.substring(0, 3).toUpperCase();
    const [loading, Setloading] = useState(true);
    useEffect(() => {
        if (data) {
            const timer = setTimeout(() => {
                Setloading(false);
            }, 1000);
            return () => clearTimeout(timer)
        }
    }, [data])
    return (
        <div>
            {
                (loading) ? ((<div className="flex justify-center items-center h-screen">
                    <PacmanLoader color="#8F00FF" size={35} />
                </div>)) : (<div className="md:mt-9 min-h-screen">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
                        <div className="md:w-2/3 w-full h-[400px] px-4 flex justify-center items-center">
                            <ResponsiveContainer>
                                <LineChart
                                    width={Math.min(800, window.innerWidth * 0.9)}
                                    height={400}
                                    data={data}
                                    margin={{ top: 50, right: 20, left: 20, bottom: 20 }} >
                                    <CartesianGrid strokeDasharray="5 5" />
                                    <XAxis
                                        dataKey="country"
                                        tickFormatter={formatCountryName}
                                        stroke="#000000"
                                        interval={data.length > 8 ? Math.floor(data.length / 4) : 0}
                                        tick={{
                                            fontSize: window.innerWidth < 640 ? 10 : 12,
                                            textAnchor: "middle",
                                        }}
                                        tickLine={false}
                                        dy={5}
                                    />
                                    <YAxis stroke="#000000" />
                                    <Tooltip />
                                    <Legend
                                        wrapperStyle={{
                                            position: "absolute",
                                            top: -6,
                                            right: 0,
                                            fontSize: window.innerWidth < 640 ? "10px" : "12px",
                                            marginTop: "25px",
                                            marginLeft: "10px",
                                        }}
                                    />
                                    <Line type="monotone" dataKey="foodPopularity" stroke="#8F00FFFF" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div >

                        <div className="md:w-1/3 w-full px-4 mt-5 md:mt-0">
                            <table className="border-collapse table-fixed w-full text-center">
                                <caption className="text-lg font-bold mb-4">Country Name and their Abbreviation</caption>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-700 p-2">JAP <FaArrowRightLong className="inline mx-2" /> Japanese</td>
                                        <td className="border border-slate-700 p-2">CRO <FaArrowRightLong className="inline mx-2" /> Croatian</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">TUR <FaArrowRightLong className="inline mx-2" /> Turkish</td>
                                        <td className="border border-slate-700 p-2">EGY <FaArrowRightLong className="inline mx-2" /> Egyptian</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">FIL <FaArrowRightLong className="inline mx-2" /> Filipino</td>
                                        <td className="border border-slate-700 p-2">CHI <FaArrowRightLong className="inline mx-2" /> Chinese</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">TUN <FaArrowRightLong className="inline mx-2" /> Tunisian</td>
                                        <td className="border border-slate-700 p-2">AME <FaArrowRightLong className="inline mx-2" /> American</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">ITA <FaArrowRightLong className="inline mx-2" /> Italian</td>
                                        <td className="border border-slate-700 p-2">CAN <FaArrowRightLong className="inline mx-2" /> Canadian</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">IND <FaArrowRightLong className="inline mx-2" /> Indian</td>
                                        <td className="border border-slate-700 p-2">DUT <FaArrowRightLong className="inline mx-2" /> Dutch</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">GRE <FaArrowRightLong className="inline mx-2" /> Greek</td>
                                        <td className="border border-slate-700 p-2">BRI <FaArrowRightLong className="inline mx-2" /> British</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-700 p-2">FRE <FaArrowRightLong className="inline mx-2" /> French</td>
                                        <td className="border border-slate-700 p-2">MAL <FaArrowRightLong className="inline mx-2" /> Malaysian</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div >
                    <h1 className="text-center font-semibold text-2xl mt-4">Fig : Line Chart Showing Food Popularity Across Various Countries</h1>
                    <h1 className="mt-5 text-xl font-medium text-justify">The line chart displayed on the website visualizes the popularity of different cuisines from various countries. The horizontal axis (X-axis) represents the countries, while the vertical axis (Y-axis) shows the popularity scores, measured on a scale from 0 to 100. Each point on the chart corresponds to a country's cuisine, with a connecting line to indicate trends or patterns across the data. For example, cuisines like Italian, French, and Indian show high popularity scores above 90, while Tunisian and Croatian cuisines have lower scores, indicating a lesser popularity compared to others. This chart helps viewers quickly identify and compare the popularity of different international cuisines at a glance.</h1>
                </div>)
            }
        </div >
    );
};
export default Statistics;