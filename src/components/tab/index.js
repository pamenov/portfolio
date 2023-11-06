import cn from 'classnames'
import styles from './style.module.css'

const Tab = ({
  is_active,
  children,
  href='#',
}) => {
  const classNames = cn(styles.tab, {
    [styles.is_active]: is_active
  })
  
  return <div className={classNames}>
      <a
        href={href}
      >
      {children}
    </a>
  </div>
}


export default Tab