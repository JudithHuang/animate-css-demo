import React, { Component } from 'react';
import { loadLang } from '../../framework/custom';
import { connect } from 'react-redux';

@connect((state) => {
    return {
        data: state.custom.data.homepage,
        locale: state.custom.locale,
    };
})
export default class Homepage extends Component {
    componentDidMount = () => {
        loadLang('en-US');
    }

    onSwitch = (lang) => {
        loadLang(lang);
    }

    render = () => {
        console.log('======data', this.props.data[this.props.locale]);

        return (
            <div className="homepage">
                Homepage
                <button onClick={() => this.onSwitch('zh-CN')}>ZH</button>
                <button onClick={() => this.onSwitch('en-US')}>EN</button>
            </div>
        );
    }
}
