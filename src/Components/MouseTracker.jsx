import React from 'react';
//https://ru.reactjs.org/docs/render-props.html
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="data:image/png;base64,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" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
          Вместо статического представления того, что рендерит <Mouse>,
          используем рендер-проп для динамического определения, что надо отрендерить.
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Перемещайте курсор мыши!</h1>

                {/*Использование рендер-пропа*/}
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

// // Если вам действительно необходим HOC по некоторым причинам, вы можете просто
// // создать обычный компонент с рендер-пропом!
// function withMouse(Component) {
//     return class extends React.Component {
//         render() {
//             return (
//                 <Mouse render={mouse => (
//                     <Component {...this.props} mouse={mouse} />
//                 )}/>
//             );
//         }
//     }
// }

export default MouseTracker;