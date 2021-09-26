import React from 'react'
import Button from '../forms/Button/Button';

type Props = {
  onLoadMoreEvt: () => void
}

const LoadMore: React.FC<Props> = ({
  onLoadMoreEvt = () => {}
}) => {
  return (
    <Button pd='8px' wd='100%' onClick={() => onLoadMoreEvt()}>
      Load More
    </Button>
  )
}

export default LoadMore
