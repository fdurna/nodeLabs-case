import * as S from './index.styles';
import { Skeleton, Alert } from "antd";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useFinancialWorkingCapital } from 'common/hooks/useFinancialWorkingCapital';
import Title from "components/title";

const WorkingCapital = () => {
    const { data, isLoading, isError, error } = useFinancialWorkingCapital();
    const chartData = data?.data?.data ?? [];
    return (
        <S.WorkingCapitalStyled>
            <div className="top">
                <Title title="Working Capital" />
                <div className="right">
                    <select>
                        <option value="7days">Last 7 days</option>
                        <option value="1month">Last 1 month</option>
                        <option value="6months">Last 6 months</option>
                    </select>
                </div>
            </div>

            <div style={{ width: "100%", height: 300 }}>
                {isLoading ? (
                    <Skeleton active style={{ backgroundColor: '#e8e8e8', width: "100%", borderRadius: 8, padding: '15px' }} />
                ) : isError ? (
                    <Alert
                        message="Veri yüklenirken bir hata oluştu"
                        description={error?.message || "Lütfen tekrar deneyin."}
                        type="error"
                        showIcon
                    />
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 40 }}>
                            <XAxis dataKey="month" className='month' dy={30} />
                            <YAxis tickFormatter={(v) => `${v / 1000}k`} dx={-30} />
                            <Tooltip
                                formatter={(value) => `${value.toLocaleString("tr-TR")} ₺`}
                                labelStyle={{ fontWeight: "bold" }}
                            />
                            <Legend
                                verticalAlign="top"
                                align="center"
                                iconType="circle"
                                wrapperStyle={{
                                    top: 0,
                                    right: 0,
                                    paddingBottom: 10,
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="income"
                                name="Income"
                                stroke="#007b55"
                                strokeWidth={3}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="expense"
                                name="Expenses"
                                stroke="#b6ff3b"
                                strokeWidth={3}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </S.WorkingCapitalStyled>
    )
}

export default WorkingCapital;