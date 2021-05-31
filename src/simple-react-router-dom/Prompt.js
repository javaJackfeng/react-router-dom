import React from 'react'
import LifeCycle from './LifeCycle'
import RouterContext from './RouterContext'

function Prompt({ when = true, message }) {
    return (
        <RouterContext.Consumer>
            {context => {
                if (!when) {
                    return null
                }
                const method = context.history.block

                return <LifeCycle
                    onMount={(self) => {
                        self.release = method(message)
                    }}
                    onUpdate={(self, prevProps) => {
                        if (prevProps.message !== message) {
                          self.release();
                          self.release = method(message);
                        }
                      }}
                    onUnmount={(self) => {
                        self.release()
                    }}
                    message={message}
                />
            }}
        </RouterContext.Consumer>
    )
}

export default Prompt