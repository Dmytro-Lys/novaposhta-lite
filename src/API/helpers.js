export const formatDate = (dateString, withTime = true) => {
    if (!dateString) return ''
    if (dateString.length === 0 || dateString.includes('0001')) return ''
    
    const date = new Date(dateString)
  
    if (date.getTime <= 0) return ''
    
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    const formattedDate = `${day}.${month}.${year}`
    if (withTime) {
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')  
      return `${formattedDate} ${hours}:${minutes}:${seconds}`   
    }
    return formattedDate
}

export const formatDateUTC = (dateString, withTime = true) => {
    if (!dateString) return ''
    if (dateString.length === 0 || dateString.includes('0001')) return ''
    
    const date = new Date(dateString)
  
    if (date.getTime <= 0) return ''
    
    const day = String(date.getUTCDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = String(date.getUTCFullYear())
    const formattedDate = `${day}.${month}.${year}`
    if (withTime) {
      const hours = String(date.getUTCHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')  
      return `${formattedDate} ${hours}:${minutes}:${seconds}`   
    }
    return formattedDate
}

export const getDateFrom = () => {
  const date = new Date()
  date.setMonth(date.getMonth() - 3)
  date.setHours(0, 0, 0, 0)
  return formatDate(date.toString())
}

export const getDateTo = () => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  date.setHours(0, 0, 0, 0)
  return formatDate(date.toString())
}

export const getStatusTime = ({ ArrivalTime , DepartureTime , Date  }) => {
    const anyTime = ArrivalTime || DepartureTime || Date || ''
    return formatDateUTC(anyTime)
}