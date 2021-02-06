import React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helpers/classes'

//  手动写类型
// interface IconProps {
//   name: string;
//   // 手动写参数类型
//   // onClick?: (e: React.MouseEvent) => void;
//   // 直接用react定义好的事件类型
//   onClick?: React.MouseEventHandler;
// }

// 使用react定义好的类型就不用自己写这么多属性了
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (
  {
    className,
    name,
    ...restProps
  }) => {
  return (
    // 笨写法
    // <svg className="nui-icon" onClick={props.onClick}>
    // 直接把props里的属性透传给svg
    <svg className={classes('nui-icon', className)}{...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
