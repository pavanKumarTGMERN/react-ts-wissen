import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h3>Hello there, Sign in to continue</h3>

            <div>
              <form>
                <div>
                  <label>Username/Email</label>
                  <input type="text" />
                  <div></div>
                </div>
                <div>
                  <label>Password</label>
                  <input />
                  <div></div>
                </div>
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
