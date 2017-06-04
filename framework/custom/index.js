import { i18nSource } from 'modules';

const CHANGE_LANG = 'i18n/CHANGE_LANG';

let store = null; 

export const init = (_store) => {
    store = _store;
};

export const loadLang = (lang) => {
    store.dispatch({ type: CHANGE_LANG, lang });
};

const _getInitialState = () =>{
    return {
        data: i18nSource,
        locale: 'zh-CN',
    };
};

export default (state = _getInitialState(), action) => {
    switch (action.type) {
        case CHANGE_LANG:
            return { ...state, locale: action.lang };
        default: 
            return state;
    }
};