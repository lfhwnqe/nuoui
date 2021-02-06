import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss'
import Icon from '../icon'
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean,
  buttons?: Array<ReactElement>,
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

function scopedClassMaker(prefix: string) {
  return function x(name?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

const scopeClass = scopedClassMaker('nui-dialog')
const sc = scopeClass

const Dialog: React.FC<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')}></div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="wechat"/>
        </div>
        <header className={sc("header")}>
          提示
        </header>
        <main className={sc("main")}>
          {props.children}
        </main>
        <footer className={sc("footer")}>
          {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>
    : null
  return ReactDOM.createPortal(x, document.body)
}
Dialog.defaultProps = {
  closeOnClickMask: false
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = <Dialog onClose={onClose} buttons={buttons} visible={true}>
    {content}
  </Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return onClose
}
const alert = (content: string) => {
  const buttons = [<button onClick={() => onClose()}>close</button>]
  const onClose = modal(content, buttons)
}

const confirm = (content: string, yes: () => void, no: () => void) => {
  const buttons = [<button onClick={() => onYes()}>yes</button>, <button onClick={() => onNo()}>no</button>]
  const onClose = modal(content, buttons)
  const onYes = () => {
    onClose()
    yes()
  }
  const onNo = () => {
    onClose()
    no()
  }
}


export {alert, confirm, modal}

export default Dialog;
