
import React, { useState } from 'react';
import { userGet } from '../../Core/Redux/User/UserAction'
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import Users from '../../Components/Module/pages/Users/Users'
import store from '../../Core/Redux/Store';
import Themes from "../../Core/settings/Theme/Index";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";


const getWrapper = () => {
    let wrapper = mount(
        <Provider store={store}>
            <ThemeProvider theme={Themes['DarkThemes']}>
                <BrowserRouter>
                    <Users />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>

    )
    return wrapper;
}

describe('UsersModule()', () => {
    let wrapper;
    global.matchMedia = global.matchMedia || function () {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),

        };
    };
    beforeEach(() => {
        wrapper = getWrapper();
    })
    describe('Open_Modal', () => {
        it('State Update Use Hook true', () => {
            let openModal = wrapper.find('button[data-test="AddUser"]')
            openModal.props().onClick();
            openModal.update();
        });
    });
    describe('Edit_Data', () => {
        it('Add_User_&_Edit_User', () => {
            let editUser = wrapper.find('AddUser[data-test="EditUser"]')
            editUser.props().onCreate();
            editUser.update();
        });
    });
    describe('Close_Modal', () => {
        it('State Update use Hook False', () => {
            let closeBtn = wrapper.find('DeleteListUser[data-test="CloseModal"]')
            closeBtn.props().close();
            closeBtn.props().Delete();
            closeBtn.update();
            closeBtn.update();
        });
    });
})