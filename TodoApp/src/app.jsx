"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("./App.scss");
const List = require("./List");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (event) => {
            this.setState({ term: event.target.value });
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            const { listId, term } = this.state;
            fetch('https://todo-api-london.now.sh/items', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    item: {
                        list_id: listId,
                        description: term
                    }
                })
            })
                .then(() => {
                return fetch(`https://todo-api-london.now.sh/lists/${listId}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                }).then((res) => res.json());
            })
                .then((data) => {
                this.setState({
                    items: data.list.items.map(({ description }) => description)
                });
            });
        };
        this.state = {
            listId: null,
            term: '',
            items: []
        };
    }
    componentDidMount() {
        fetch('https://todo-api-london.now.sh/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                list: {
                    name: 'my list'
                }
            })
        })
            .then((res) => res.json())
            .then((data) => {
            this.setState({
                listId: data.list.id
            });
        });
    }
    render() {
        return (<div>
        <form className={css.App} onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
          <button>Submit</button>
        </form>
        <List items={this.state.items}/>
      </div>);
    }
}
exports.App = App;
//# sourceMappingURL=app.jsx.map