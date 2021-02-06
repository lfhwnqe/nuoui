import ReactDOM from 'react-dom';
import React, {useState} from 'react';
// import Icon from './icon';
import Dialog, {alert, confirm, modal} from './dialog/dialog'

// 手动写参数类型
// const fn = (e: React.MouseEvent) => {
//   console.log('e:', e);
// };
// 直接用react定义好的事件类型
// const fn: React.MouseEventHandler = (e) => {
//   console.log('e:', e);
// };

const DialogExample: React.FC<any> = () => {
  const [showDialog, setShowDialog] = useState(false)
  const openModal = () => {
    const close = modal(<h2>hahahah
      <button onClick={() => close()}>close</button>
    </h2>)
  }
  return (<div>
    <div>
      <button onClick={() => setShowDialog(i => !i)}>修改dialog</button>
    </div>
    <Dialog visible={showDialog}
      buttons={[<button>1</button>, <button>2</button>]}
      onClose={() => setShowDialog(false)}
    >
      <h1>哈哈哈</h1>
    </Dialog>
    <div>

      <button onClick={() => alert('hello world')}>alert</button>
    </div>
    <div>
      <button onClick={() => confirm('hello world', () => {
        console.log('yes')
      }, () => {
        console.log('no')
      })}>confirm
      </button>

    </div>
    <div>
      <button onClick={() => openModal()}>modal</button>
    </div>
  </div>)
}

ReactDOM.render(
  <div>
    <DialogExample></DialogExample>
  </div>,
  document.querySelector('#root')
);
