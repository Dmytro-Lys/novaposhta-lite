import { useSelector } from 'react-redux'
import { getIsVisibleReceivers, selectVisibleReceivers } from 'redux/receivers/selectors'
import ReceiverItem from 'components/ReceiverItem/ReceiverItem'
import css from './ReceiverList.module.css'

const ReceiverList = () => {
    const isVisibleReceivers = useSelector(getIsVisibleReceivers)
    const receivers = useSelector(selectVisibleReceivers)
   
    return (
        isVisibleReceivers && receivers &&
        <ul className={css.list} >
                {receivers.map( receiver => {
              return <ReceiverItem key={receiver.id} receiver={receiver} />
           })}
        </ul>
    )
}

export default ReceiverList