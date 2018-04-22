import Enzyme, { shallow, render, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import Galary from "./Galary";
global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("Test Suite", function() {
    test('render a label', () => {
        const wrapper = shallow(
            <Galary>Hello Jest!</Galary>
        );
        expect(wrapper).toMatchSnapshot();
    });
})