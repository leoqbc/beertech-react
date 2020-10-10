import React, { Component } from "react";

type RelogioProps = {
    hour: number,
    minutes: number,
    seconds: number
};

interface IRelogioState {
    time: Date
}

// Generics somento passar neles tipos: <number, string> - variavel que aguardo o tipo que vai trabalhado
export default class Relogio extends Component<RelogioProps, IRelogioState> {
    constructor(props: RelogioProps) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Atualizou o relogio");
    }
}