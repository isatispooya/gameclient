import { useScoreGet } from "../hooks";
import { RankingTableType } from "../types";

const RankingTable = () => {
    const { data: score } = useScoreGet();
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">رتبه بندی</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">رتبه</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">نام</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">امتیاز</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {score?.all_users.map((item: RankingTableType) => (
                            <tr 
                                key={item.user_id}
                                className={`transition-colors duration-200 ${
                                    item.is_authenticated_user 
                                    ? 'bg-blue-50 hover:bg-blue-100 font-medium' 
                                    : 'hover:bg-gray-50'
                                }`}
                            >
                                <td className="px-6 py-4 text-sm text-gray-700">{item.rank}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{item.user_name}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{item.total_score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RankingTable;
