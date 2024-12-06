import { RankingTableType } from "./ranking-table.type";


export type RankingType = {
    all_users: RankingTableType[];
    user_rank: number;
    user_score: number;
};