import { Tab } from '../index.js'
import styles from './style.module.css'
import cn from 'classnames'


const Header = () => {
    // const classNames = cn(styles.header)
    return <div className={cn(styles.header)}>
        <Tab href='/bio'> Bio </Tab>
        <Tab> Expirience </Tab>
        <Tab> Skills </Tab>
        <Tab> My works </Tab>
    </div>

}

export default Header