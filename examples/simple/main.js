import { render, WeElement, define } from '../../src/omi'
import './hello-element'

class MyApp extends WeElement {

    onClick = (evt) => {

    }

    static get data() {
        return { abc: 'abc', passToChild: '123' }
    }

    onAbc = (evt) => {
        this.data.abc = ' by ' + evt.detail.name
        this.update()   
    }

    css() {
        return `
         div{
             color: green;
         }`
    }

    render(props, data) {
        return (
            <div onClick={this.onClick}>
                Hello {props.name} {data.abc}
                <hello-element onAbc={this.onAbc} prop-from-parent={data.passToChild} msg="WeElement"></hello-element>
            </div>
        )
    }
}


define('my-app', MyApp)

render(<my-app name='Omi v4.0'></my-app>, 'body')
