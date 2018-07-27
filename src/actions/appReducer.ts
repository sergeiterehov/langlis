import { Reducer } from "redux";

export interface ILeasson {
    id: number;
    name: string;
    author: string;
    createdAt: Date;
    numberWords: number;
}

export interface IAppStore {
    updatedAt: Date;
    leassons: ILeasson[];
}

export enum AppActions {
    /**
     * Add list of leassons
     */
    AddLeassons,
    /**
     * Clean current list of leassons
     */
    CleanLeassons,
}

const initialState: IAppStore = {
    updatedAt: new Date(2018, 1, 1),
    leassons: [],
};

export const appReducer: Reducer<IAppStore> = (state = initialState, action) => {
    switch (action.type) {
        case AppActions.CleanLeassons: return {
            ...state,
            updatedAt: new Date(),
            leassons: [],
        };

        case AppActions.AddLeassons: return {
            ...state,
            updatedAt: new Date(),
            leassons: [
                ...state.leassons,
                ...action.leassons,
            ],
        };
    }

    return state;
};
