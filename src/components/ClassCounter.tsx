import React, { ReactElement, SyntheticEvent } from "react";

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
        // function bind to bind our context to the newly created method
        this.intervalID = window.setInterval(this.incrementCounter.bind(this), 2000);
    }

    componentWillUnmount(): void {
        window.clearInterval(this.intervalID);
    }

    /**
     * _ -> Optional parameter to prevent eslinter from raising an unused error
     * @param _prevPros
     * @param prevState
     */
    componentDidUpdate(_prevPros: Props, prevState: State): void {
        if (prevState.counter !== this.state.counter) {
            window.document.title = "Counter: " + this.state.counter;
        }
    }

    private incrementCounter(): void {
        this.setState((currentState) => ({
            counter: currentState.counter + 1,
        }));
    }

    /**
     * if we want to pass through custom parameters, wie have to declare an arrow function which can do anything and call the defined function
     * @param e
     * @param foo
     */
    private onClickAddCounter = (e: SyntheticEvent, foo: string) => {
        e.preventDefault();
        console.log(foo);
        this.incrementCounter();
    };

    render(): ReactElement {
        return (
            <>
                <p>Counter Value: {this.state.counter}</p>
                <button
                    className="ui button icon"
                    onClick={(e) => {
                        // complete function body where we can do whatever we want
                        this.onClickAddCounter(e, "bar");
                    }}
                >
                    <i className="icon plus" />
                </button>
            </>
        );
    }
}
