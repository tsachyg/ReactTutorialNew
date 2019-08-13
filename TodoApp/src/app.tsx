import * as React from 'react';
import * as css from './App.scss';
import * as List from './List';

interface AppState {
  listId: string;
  term: string;
  items: Array<any>;
}

export class App extends React.Component {
  state: AppState;
  constructor(props) {
    super(props);
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

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
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
        }).then((res) => res.json())
      })
      .then((data) => {
        this.setState({
          items: data.list.items.map(({ description }) => description)
        })
      });
  }

  render() {
    return (
      <div>
        <form className={css.App} onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}