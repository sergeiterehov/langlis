import { Reducer, Action } from "redux";

export interface ILesson {
    id: string;
    name: string;
    author: string;
    createdAt: Date;
    numberWords: number;
}

export interface IAppStore {
    updatedAt: Date;
    lessons: ILesson[];
}

export enum AppActionTypes {
    /**
     * Add list of leassons
     */
    AddLeassons,
    /**
     * Clean current list of leassons
     */
    CleanLeassons,
}

export interface IAppStoreAction {
    type: AppActionTypes;
    lessons?: ILesson[];
}

const initialState: IAppStore = {
    updatedAt: new Date(2018, 1, 1),
    lessons: [],
};

export const appReducer: Reducer<IAppStore, IAppStoreAction> = (state = initialState, action) => {
    switch (action.type) {
        case AppActionTypes.CleanLeassons: return {
            ...state,
            updatedAt: new Date(),
            lessons: [],
        };

        case AppActionTypes.AddLeassons: return {
            ...state,
            updatedAt: new Date(),
            lessons: [
                ...state.lessons,
                ...action.lessons,
            ],
        };
    }

    return state;
};
