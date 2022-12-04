import { match } from "./FootballMatch"
interface ReducerAction {
    type: string;
    payload: any;
}
export const reducer = (state: match, action: ReducerAction): match => {
    switch (action.type) {
        case 'addplayer':
            console.log('add')
            return { ...state, players: [...state.players, action.payload]};
        case 'removeplayer':
            return { ...state, players: state.players.filter((player) => player.name !== action.payload) }
        default: return state
    }
    
}