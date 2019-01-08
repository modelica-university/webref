import React from 'react'

import { searchContext } from './context'

export interface SearchBoxProps {}
export class SearchBox extends React.Component<SearchBoxProps> {
  render() {
    return (
      <searchContext.Consumer>
        {state => (
          <div
            style={{
              display: 'inline-flex',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            <div className="bp3-input-group">
              <span className="bp3-icon bp3-icon-search" />
              <input
                className="bp3-input"
                type="search"
                placeholder="Search input"
                dir="auto"
                value={state.search}
                onChange={ev => state.setTerm(ev.target.value)}
              />
            </div>
          </div>
        )}
      </searchContext.Consumer>
    )
  }
}
