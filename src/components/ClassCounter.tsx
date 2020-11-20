import React, { ReactElement } from "react";

interface Props {
    readonly startValue?: number;
}

interface State {
    counter: number;
}

export default class ClassCounter extends React.Component<Props, State> {
    /**
     * By just defining the class property, TypeScript throws issue that it is not defined in the constructor
     * So either we go with <name>!: <type> or <name>: <type> | undefined
     * First tells TypeScript "Yes we do set it, no worries", Second that it is allowed to be undefined
     */
    private intervalID: number | undefined;

    constructor(props: Props) {        
        super(props);
        this.state = { counter: this.props.startValue || 0 };
    }

    componentDidMount(): void {
        this.intervalID = window.setInterval(() => {
            this.setState(currentState => ({ counter: currentState.counter + 1 }));
        }, 1000);
    }

    componentWillUnmount(): void {
        window.clearInterval(this.intervalID);
    }

    render(): ReactElement {
        return (
            <>
                <p>Counter Value: {this.state.counter}</p>
            </>
        )
    }
}
