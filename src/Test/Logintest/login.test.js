import Signin from '../../Components/Module/auth/signin/Signin'
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import store from '../../Core/Redux/Store';
import Themes from "../../Core/settings/Theme/Index";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";


const getWrapper = () => {
    let wrapper = mount(
        <Provider store={store}>
            <ThemeProvider theme={Themes['DarkThemes']}>
                <BrowserRouter>
                    <Signin />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>

    )
    return wrapper;
}

describe('Signin()', () => {
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
    it('somthing', () => {
        wrapper.find('input[data-id="username"]').simulate('change', { target: { value: 'jenish' } })
        wrapper.find('input[data-id="password"]').simulate('change', { target: { value: '123123' } })
        wrapper.find('JdButton').simulate('submit')
    })
})